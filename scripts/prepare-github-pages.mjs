import { readFile, writeFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const outputDirectory = join(process.cwd(), "dist", "client");
const repositoryPath = "/Web-Atlas-Portal";

const editableExtensions = new Set([
  ".html",
  ".rsc",
  ".css",
  ".js",
  ".json",
  ".xml",
  ".txt",
  ".webmanifest",
]);

const excludedPrefixes = [
  `${repositoryPath}/`,
  "//",
  "/http:",
  "/https:",
  "/mailto:",
  "/tel:",
  "/data:",
  "/#",
];

function addRepositoryPath(content) {
  return content.replace(
    /(["'(=:\s])\/(?!\/)([^"'()\s<>]*)/g,
    (match, prefix, path) => {
      const fullPath = `/${path}`;

      if (excludedPrefixes.some((item) => fullPath.startsWith(item))) {
        return match;
      }

      return `${prefix}${repositoryPath}${fullPath}`;
    },
  );
}

async function processDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(filePath);
      continue;
    }

    if (!editableExtensions.has(extname(entry.name).toLowerCase())) {
      continue;
    }

    const original = await readFile(filePath, "utf8");
    const updated = addRepositoryPath(original);

    if (updated !== original) {
      await writeFile(filePath, updated, "utf8");
      console.log(`Updated: ${filePath}`);
    }
  }
}

await processDirectory(outputDirectory);

/* Prevent GitHub Pages from applying Jekyll processing. */
await writeFile(join(outputDirectory, ".nojekyll"), "", "utf8");

console.log("");
console.log("GitHub Pages paths prepared successfully.");
console.log(`Site base path: ${repositoryPath}/`);