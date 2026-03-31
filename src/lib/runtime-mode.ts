export function isGitHubPagesBuild(): boolean {
  return process.env.GITHUB_PAGES === "1" || process.env.GITHUB_PAGES === "true";
}

