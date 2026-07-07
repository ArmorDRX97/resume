import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from 'tailwindcss';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? process.env.GITHUB_ACTOR ?? 'your-github-username';
const isUserPage = repository.endsWith('.github.io');
const base = process.env.BASE_PATH ?? (repository && !isUserPage ? `/${repository}/` : '/');
const site = process.env.SITE_URL ?? `https://${owner}.github.io`;

export default defineConfig({
  site,
  base,
  integrations: [mdx()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  },
  output: 'static',
});
