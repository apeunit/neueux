import fs from "fs";
import path from "path";
import { ScreenContent } from './screen';
import { getUserflow } from './userflows';
import { getTag } from './tags';

const postsDirectory = path.join(process.cwd(), "content/apps");

export type AppContent = {
  readonly name: string;
  readonly description: string;
  readonly device: string;
  readonly icon: string;
  readonly slug: string;
  readonly screens?: ScreenContent[];
  readonly tags?: string[];
  readonly userflows?: string[];
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
    .filter((it) => it.endsWith(".json"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const app = JSON.parse(fileContents);
      const screens = app.screens.map((screen) => {
        const userflow = getUserflow(screen.userflow);
        const tags = screen.tags.map((tag) => getTag(tag)).filter((tag) => tag);
        return {
          ...screen,
          app: app.slug,
          userflow,
          tags
        }
      });

      const matterResult = {
        ...app,
        screens,
      }

      const matterData = matterResult as {
        name: string,
        description: string,
        device: string,
        icon: string,
        published_at: string,
        slug: string,
        screens?: ScreenContent[],
        tags?: string[],
        userflows?: string[],
      };

      const tags = matterData.screens.map((screen) => screen.tags.map((tag) => tag.id));
      const userflows = matterData.screens.map((screen) => screen.userflow.id);
      matterData.tags = [...new Set(tags.flat())] as string[];
      matterData.userflows = [...userflows] as string[];

      return matterData;
    });
  // Sort posts by date
  appCache = allPostsData;
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