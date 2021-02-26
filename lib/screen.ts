import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const screensDirectory = path.join(process.cwd(), "content/screens");

export type ScreenContent = {
    readonly image: string;
    readonly slug: string;
    readonly app: string;
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
            };

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
    appSlug: string,
    page: number,
    limit: number,
): ScreenContent[] {
    return fetchScreenContent().filter((screen) => screen.app === appSlug).slice((page - 1) * limit, page * limit);
}

export function getAppContent(
    slug,
): ScreenContent {
    return fetchScreenContent().find((app) => app.slug === slug);
}