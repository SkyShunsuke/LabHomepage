#!/usr/bin/env node

const requiredMajor = 22;
const current = process.versions.node;
const [major] = current.split(".").map(Number);

if (major !== requiredMajor) {
  console.error(
    [
      "",
      `Unsupported Node.js version: ${current}`,
      `This project requires Node.js ${requiredMajor}.x (see .tool-versions).`,
      "Use `asdf local nodejs 22.22.1` (or your version manager equivalent), then reinstall deps if needed.",
      ""
    ].join("\n")
  );
  process.exit(1);
}

