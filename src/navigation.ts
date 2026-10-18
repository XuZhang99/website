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
      href: 'https://github.com/xLLM-AI/xllm',
      target: '_blank',
      icon: 'tabler:brand-github',
      githubRepo: 'xLLM-AI/xllm',
    },
  ],
};

export const footerData = {
  copyright: '© 2026 xLLM. All rights reserved.',
  tagline: 'High-performance inference engine across heterogeneous accelerators for many models.',
  homeHref: getPermalink('/'),
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
        { text: 'GitHub', href: 'https://github.com/xLLM-AI/xllm', target: '_blank' },
        { text: 'Issues', href: 'https://github.com/xLLM-AI/xllm/issues', target: '_blank' },
        { text: 'Docker images', href: 'https://quay.io/repository/jd_xllm/xllm-ai?tab=tags', target: '_blank' },
        { text: 'Technical report', href: 'https://arxiv.org/abs/2510.14686', target: '_blank' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/xLLM-AI/xllm' },
    { ariaLabel: 'Documentation', icon: 'tabler:book-2', href: 'https://docs.xllm-ai.com/en/' },
    { ariaLabel: 'Docker', icon: 'tabler:brand-docker', href: 'https://quay.io/repository/jd_xllm/xllm-ai?tab=tags' },
    { ariaLabel: 'Technical Report', icon: 'tabler:file-text', href: 'https://arxiv.org/abs/2510.14686' },
  ],
};

export const headerDataZh = {
  links: [
    {
      text: '文档',
      href: 'https://docs.xllm-ai.com/zh/',
      target: '_blank',
    },
    {
      text: '团队',
      href: getPermalink('/zh/team'),
    },
    {
      text: '论文',
      href: getPermalink('/zh/publications'),
    },
    {
      text: '社区',
      href: `${getPermalink('/zh')}#community`,
    },
  ],
  actions: [
    {
      text: 'GitHub',
      href: 'https://github.com/xLLM-AI/xllm',
      target: '_blank',
      icon: 'tabler:brand-github',
      githubRepo: 'xLLM-AI/xllm',
    },
  ],
};

export const footerDataZh = {
  copyright: '© 2026 xLLM. 保留所有权利。',
  tagline: '面向多种模型、跨异构加速器的高性能推理引擎。',
  homeHref: getPermalink('/zh'),
  links: [
    {
      title: '探索',
      links: [
        { text: '文档', href: 'https://docs.xllm-ai.com/zh/', target: '_blank' },
        { text: '论文', href: getPermalink('/zh/publications') },
        { text: '团队', href: getPermalink('/zh/team') },
      ],
    },
    {
      title: '项目',
      links: [
        { text: 'GitHub', href: 'https://github.com/xLLM-AI/xllm', target: '_blank' },
        { text: '问题反馈', href: 'https://github.com/xLLM-AI/xllm/issues', target: '_blank' },
        { text: 'Docker 镜像', href: 'https://quay.io/repository/jd_xllm/xllm-ai?tab=tags', target: '_blank' },
        { text: '技术报告', href: 'https://arxiv.org/abs/2510.14686', target: '_blank' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/xLLM-AI/xllm' },
    { ariaLabel: '文档', icon: 'tabler:book-2', href: 'https://docs.xllm-ai.com/zh/' },
    { ariaLabel: 'Docker', icon: 'tabler:brand-docker', href: 'https://quay.io/repository/jd_xllm/xllm-ai?tab=tags' },
    { ariaLabel: '技术报告', icon: 'tabler:file-text', href: 'https://arxiv.org/abs/2510.14686' },
  ],
};
