import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/apps");

let appCache;

function fetchAppContent() {
  if (appCache && appCache.length) {
    return appCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".json"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section

      return JSON.parse(fileContents);
    });
  return allPostsData;
}

// export function countPosts(tag?: string): number {
//   return fetchAppContent().filter(
//     (it) => !tag || (it.tags && it.tags.includes(tag))
//   ).length;
// }

export function listAllAppContent(
) {
  return fetchAppContent();
}
