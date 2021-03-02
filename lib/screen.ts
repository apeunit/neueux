import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

import { getUserflow, UserflowContent } from './userflows';
import { getTag, TagContent } from './tags';

const screensDirectory = path.join(process.cwd(), "content/screens");

export type ScreenContent = {
    readonly image: string;
    readonly slug: string;
    readonly app: string;
    readonly userflows?: UserflowContent[];
    readonly tags?: TagContent[];
};

let screenCache: ScreenContent[];

function fetchScreenContent(): ScreenContent[] {
    if (screenCache) {
        return screenCache;
    }
    // Get file names under /screens
    const fileNames = fs.readdirSync(screensDirectory);
    const allScreensData = fileNames
        .filter((it) => it.endsWith(".mdx"))
        .map((fileName) => {
            // Read markdown file as string
            const fullPath = path.join(screensDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse the screen metadata section
            const matterResult = matter(fileContents, {
                engines: {
                    yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
                },
            });

            const matterData = matterResult.data as {
                image: string;
                slug: string,
                app: string,
                userflows?: UserflowContent[];
                tags?: TagContent[];
            };
            let userflows = [];
            if (matterResult.data.userflows) {
                userflows = matterResult.data.userflows.map((userflow) => getUserflow(userflow));
            }

            if (matterResult.data.userflow) {
                userflows.push(getUserflow(matterResult.data.userflow));
            }

            matterData.userflows = userflows;

            let tags = [];
            if (matterResult.data.tags) {
                tags = matterResult.data.userflows.map((tag) => getUserflow(tag));
            }

            if (matterResult.data.tag) {
                tags.push(getTag(matterResult.data.tag));
            }

            matterData.tags = tags;

            const slug = fileName.replace(/\.mdx$/, "");
            matterData.slug = slug;
            return matterData;
        });

    return allScreensData;
}

export function listScreenContent(
    page: number,
    limit: number,
): ScreenContent[] {
    return fetchScreenContent()
        .slice((page - 1) * limit, page * limit);
}

export function listAppScreenContent(
    appSlug: string | string[],
    page: number,
    limit: number,
): ScreenContent[] {
    return fetchScreenContent().filter((screen) => screen.app === appSlug).slice((page - 1) * limit, page * limit);
}

export function getAllAppScreenContent(
    appSlug: string | string[],
): ScreenContent[] {
    return fetchScreenContent().filter((screen) => screen.app === appSlug);
}

export function getScreenContent(
    slug: string | string[],
): ScreenContent {
    return fetchScreenContent().find((screen) => screen.slug === slug);
}