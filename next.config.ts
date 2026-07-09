import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export',
  // Pin the workspace root to this project so a stray parent lockfile
  // (../package-lock.json) can't misplace Turbopack's cache. See:
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
