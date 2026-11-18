// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const group = (label, dir, pages) => ({ label, items: pages.map((p) => `${dir}/${p}`) });

export default defineConfig({
  site: 'https://docs.tryomniscient.com',
  integrations: [
    starlight({
      title: 'Omniscient Docs',
      description: 'Omniscient help center: set up the CRM that fills itself in from your email and calendar, work with Otto, and connect your tools.',
      logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', alt: 'Omniscient', replacesTitle: true },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'external', label: 'Omniscient app', href: 'https://app.tryomniscient.com' }],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' } },
      ],
      sidebar: [
        { label: 'Get started', items: ['index', ...['create-your-workspace', 'connect-your-inbox', 'import-your-data', 'invite-your-team', 'your-first-week'].map((p) => `get-started/${p}`)] },
        group('CRM', 'crm', ['companies-and-people', 'opportunities-and-pipelines', 'views', 'record-pages', 'data-model']),
        group('Otto', 'otto', ['ask-otto', 'skills-and-knowledge', 'find-leads', 'record-updates-and-drafts', 'workflows']),
        group('Email and calendar', 'email-and-calendar', ['email', 'meetings-and-call-notes']),
        group('Chrome extension', 'chrome-extension', ['install-and-connect', 'use-the-extension']),
        { label: 'Integrations', collapsed: true, items: ['integrations', ...['google', 'microsoft', 'zoom', 'slack', 'crm-imports'].map((p) => `integrations/${p}`)] },
        group('Workspace', 'workspace', ['members-and-roles', 'account-and-security', 'sign-in-rules-and-sso', 'plans-and-billing', 'data-and-trash']),
        { label: 'Developers', collapsed: true, items: ['developers/api', 'developers/webhooks', 'developers/mcp'] },
        { label: 'Reference', collapsed: true, items: ['reference/glossary', 'reference/faq', 'reference/troubleshooting'] },
      ],
    }),
  ],
});
