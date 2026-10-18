/**
 * Resolves GitHub star counts at build time.
 *
 * Visitors must not call `api.github.com` themselves: unauthenticated requests
 * are limited to 60 per hour per IP and are unreliable from mainland China, so
 * the count used to disappear from the header. Fetching during the build with
 * `GITHUB_TOKEN` (1000 requests per hour) keeps the number stable.
 *
 * Failures are not fatal: the caller simply hides the count, so the site never
 * renders a stale or invented value.
 */

const apiBase = (process.env.GITHUB_API_URL ?? 'https://api.github.com').replace(/\/+$/, '');

const cache = new Map<string, Promise<number | undefined>>();

async function fetchStars(repo: string): Promise<number | undefined> {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'xllm-website-build',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${apiBase}/repos/${repo}`, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = (await response.json()) as { stargazers_count?: unknown };

    if (typeof data.stargazers_count !== 'number') {
      throw new Error('GitHub API response has no stargazers_count');
    }

    console.log(`[github-stars] ${repo}: ${data.stargazers_count}`);

    return data.stargazers_count;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[github-stars] ${repo}: ${reason}; hiding the star count`);

    return undefined;
  }
}

export function getGithubStars(repo: string): Promise<number | undefined> {
  if (!cache.has(repo)) {
    cache.set(repo, fetchStars(repo));
  }

  return cache.get(repo)!;
}
