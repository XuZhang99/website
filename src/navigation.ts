import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Docs',
      href: 'https://docs.xllm-ai.com/en/',
      target: '_blank',
    },
    {
      text: 'Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Publications',
      href: getPermalink('/publications'),
    },
    {
      text: 'Community',
      href: getPermalink('/#community'),
    },
  ],
  actions: [
    {
      text: 'GitHub',
      href: 'https://github.com/jd-opensource/xllm',
      target: '_blank',
      icon: 'tabler:brand-github',
      githubRepo: 'jd-opensource/xllm',
    },
  ],
};

export const footerData = {
  copyright: '© 2026 xLLM. All rights reserved.',
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Documentation', href: 'https://docs.xllm-ai.com/en/', target: '_blank' },
        { text: 'Publications', href: getPermalink('/publications') },
        { text: 'Team', href: getPermalink('/team') },
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'GitHub', href: 'https://github.com/jd-opensource/xllm', target: '_blank' },
        { text: 'Issues', href: 'https://github.com/jd-opensource/xllm/issues', target: '_blank' },
        { text: 'Docker images', href: 'https://quay.io/repository/jd_xllm/xllm-ai?tab=tags', target: '_blank' },
        { text: 'Technical report', href: 'https://arxiv.org/abs/2510.14686', target: '_blank' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/jd-opensource/xllm' },
    { ariaLabel: 'Documentation', icon: 'tabler:book-2', href: 'https://docs.xllm-ai.com/en/' },
    { ariaLabel: 'Docker', icon: 'tabler:brand-docker', href: 'https://quay.io/repository/jd_xllm/xllm-ai?tab=tags' },
    { ariaLabel: 'Technical Report', icon: 'tabler:file-text', href: 'https://arxiv.org/abs/2510.14686' },
  ],
};
