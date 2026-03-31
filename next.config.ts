import type { NextConfig } from "next";

const isFastBuild = process.env.FAST_BUILD === "1";
const distDir = process.env.NEXT_DIST_DIR || ".next";
const isGitHubPages = process.env.GITHUB_PAGES === "1" || process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io");
const computedBasePath = process.env.GITHUB_PAGES_BASE_PATH || (repositoryName && !isUserOrOrgPagesRepo ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  distDir,
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
  basePath: isGitHubPages ? computedBasePath : undefined,
  assetPrefix: isGitHubPages && computedBasePath ? `${computedBasePath}/` : undefined,
  images: {
    unoptimized: isGitHubPages
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: isFastBuild
  },
  typescript: {
    ignoreBuildErrors: isFastBuild
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid intermittent filesystem cache rename errors on some local filesystems.
      config.cache = { type: "memory" };
    }
    return config;
  },
  experimental: isGitHubPages
    ? undefined
    : {
        serverActions: {
          // File uploads from admin forms require a higher body limit than the 1MB default.
          bodySizeLimit: "12mb"
        }
      }
};

export default nextConfig;
