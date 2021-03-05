import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import { ScreenContent, getAllAppScreenContent } from './screen';

const postsDirectory = path.join(process.cwd(), "content/apps");

export type AppContent = {
  readonly name: string;
  readonly description: string;
  readonly device: string;
  readonly icon: string;
  readonly slug: string;
  readonly screens?: ScreenContent[];
  readonly tags?: string[];
  readonly userflows: string[];
  readonly published_at: string;
};

let appCache: AppContent[];

function fetchAppContent(): AppContent[] {
  if (appCache && appCache.length) {
    return appCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });

      const matterData = matterResult.data as {
        name: string,
        description: string,
        device: string,
        icon: string,
        published_at: string,
        slug: string,
        screens?: ScreenContent[],
        tags?: string[],
        userflows: string[],
      };

      const slug = fileName.replace(/\.mdx$/, "");
      const screens = getAllAppScreenContent(slug);
      const tags = screens.map((screen) => screen.tags.map((tag) => tag.slug));
      const userflows = screens.map((screen) => screen.userflows.map((userflow) => userflow.slug));
      matterData.slug = slug;
      matterData.screens = screens.slice(0, 6);
      matterData.tags = [...new Set(tags.flat())] as string[];
      matterData.userflows = [...new Set(userflows.flat())] as string[];

      return matterData;
    });
  // Sort posts by date
  appCache = allPostsData.sort((a, b) => {
    if (a.published_at < b.published_at) {
      return 1;
    } else {
      return -1;
    }
  });
  return appCache;
}

// export function countPosts(tag?: string): number {
//   return fetchAppContent().filter(
//     (it) => !tag || (it.tags && it.tags.includes(tag))
//   ).length;
// }

export function listAppContent(
  page: number,
  limit: number,
): AppContent[] {
  return fetchAppContent()
    .slice((page - 1) * limit, page * limit);
}

export function listAllAppContent(
): AppContent[] {
  return fetchAppContent();
}

export function getAppContent(
  slug: string | string[],
): AppContent {
  return fetchAppContent().find((app) => app.slug === slug);
}