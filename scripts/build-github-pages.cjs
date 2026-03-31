const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const actionsFile = path.join(process.cwd(), "src", "lib", "admin-actions.server.ts");

function run() {
  const original = fs.readFileSync(actionsFile, "utf8");
  let patched = original;

  if (patched.startsWith('"use server";')) {
    patched = patched.replace(
      /^"use server";/,
      "// use server disabled only for GitHub Pages static export"
    );
  }

  fs.writeFileSync(actionsFile, patched, "utf8");

  const result = spawnSync("npm", ["run", "build"], {
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES: "1",
      NEXT_PUBLIC_GITHUB_PAGES: "1",
      DESIGN_PREVIEW: "1",
      FAST_BUILD: "1"
    }
  });

  fs.writeFileSync(actionsFile, original, "utf8");

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run();

