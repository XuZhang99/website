export const locales = ['en', 'zh'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<
  Locale,
  {
    label: string;
    htmlLang: string;
    switchLabel: string;
    mainNavLabel: string;
    menuLabel: string;
  }
> = {
  en: {
    label: 'EN',
    htmlLang: 'en',
    switchLabel: 'Switch language',
    mainNavLabel: 'Main navigation',
    menuLabel: 'Toggle Menu',
  },
  zh: {
    label: '中',
    htmlLang: 'zh-CN',
    switchLabel: '切换语言',
    mainNavLabel: '主导航',
    menuLabel: '切换菜单',
  },
};

export const getLocaleFromPathname = (pathname: string): Locale =>
  pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';

export const getBasePathname = (pathname: string): string => {
  const normalized = pathname.replace(/\/+$/, '') || '/';

  if (normalized === '/zh') return '/';
  if (normalized.startsWith('/zh/')) return normalized.slice(3) || '/';

  return normalized;
};

export const getLocalizedPathname = (pathname: string, locale: Locale): string => {
  const basePathname = getBasePathname(pathname);

  // The 404 page is shared by both locales; point the switcher at each locale's home.
  if (basePathname === '/404' || basePathname === '/404.html') {
    return locale === 'zh' ? '/zh' : '/';
  }

  if (locale === 'en') return basePathname;

  return basePathname === '/' ? '/zh' : `/zh${basePathname}`;
};

export const getLocalizedUrl = (url: URL, locale: Locale): string =>
  `${getLocalizedPathname(url.pathname, locale)}${url.search}${url.hash}`;
