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

function addRepositoryPath(content) {
  return content
    .replace(
      /(["'])\/(?!\/|Web-Atlas-Portal\/)(?=[A-Za-z0-9._~-])/g,
      (match, quote) => `${quote}${repositoryPath}/`,
    )
    .replace(
      /url\(\s*(["']?)\/(?!\/|Web-Atlas-Portal\/)/gi,
      (match, quote) => `url(${quote}${repositoryPath}/`,
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
await writeFile(join(outputDirectory, ".nojekyll"), "", "utf8");

console.log("");
console.log("GitHub Pages paths prepared successfully.");
console.log(`Site base path: ${repositoryPath}/`);