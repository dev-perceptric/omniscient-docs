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
        { label: 'Get started', items: ['index', ...['create-your-workspace', 'connect-your-inbox', 'import-your-data', 'invite-your-team', 'your-first-week', 'the-interface'].map((p) => `get-started/${p}`)] },
        group('CRM', 'crm', ['companies-and-people', 'opportunities-and-pipelines', 'views', 'record-pages', 'notes', 'custom-objects', 'data-model', 'pulse']),
        group('Otto', 'otto', ['ask-otto', 'skills-and-knowledge', 'find-leads', 'record-updates-and-drafts', 'workflows']),
        group('Email and calendar', 'email-and-calendar', ['email', 'meetings-and-call-notes']),
        group('Chrome extension', 'chrome-extension', ['install-and-connect', 'use-the-extension']),
        { label: 'Integrations', collapsed: true, items: ['integrations', ...['google', 'microsoft', 'other-email', 'zoom', 'notetakers', 'slack', 'crm-imports', 'hubspot', 'salesforce', 'attio', 'pipedrive', 'claritia', 'arrowsterr', 'ai-apps', 'app-store', 'e-sign'].map((p) => `integrations/${p}`)] },
        { label: 'Settings', collapsed: true, items: ['settings', ...['account', 'security', 'notifications', 'experience', 'general', 'members', 'sign-in', 'brand', 'templates', 'plans-and-billing', 'mail-and-calendar', 'call-notes', 'chrome-extension', 'integrations', 'capture', 'imports', 'trash'].map((p) => `settings/${p}`)] },
        group('Workspace', 'workspace', ['members-and-roles', 'roles-and-permissions', 'account-and-security', 'sign-in-rules-and-sso', 'plans-and-billing', 'plan-limits', 'data-and-trash']),
        { label: 'Recipes', collapsed: true, items: ['recipes', ...['find-leads-and-save', 'set-up-a-pipeline', 'workflow-after-a-meeting', 'connect-the-whole-team', 'import-from-another-crm', 'save-a-prospect-list', 'route-website-leads', 'use-omniscient-from-claude', 'prep-and-follow-up', 'weekly-pipeline-review'].map((p) => `recipes/${p}`)] },
        { label: 'Developers', collapsed: true, items: ['developers/api', 'developers/webhooks', 'developers/mcp'] },
        { label: 'API reference', collapsed: true, items: ['api-reference', ...['authentication', 'me', 'contacts', 'accounts', 'opportunities', 'leads', 'activities', 'notes', 'custom-objects', 'lists', 'relationships', 'owners', 'webhook-subscriptions', 'capture', 'mcp-tools'].map((p) => `api-reference/${p}`)] },
        { label: 'Reference', collapsed: true, items: ['reference/glossary', 'reference/keyboard-shortcuts', 'reference/faq', 'reference/troubleshooting', 'reference/error-messages', 'reference/changelog'] },
      ],
    }),
  ],
});
