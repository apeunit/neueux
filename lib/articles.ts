import fs from "fs";
import path from "path";
// import { ScreenContent } from "./screen";
import matter from "gray-matter";

export const articlesDirectory = "content/articles";

export type ArticleContent = {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly category: string;
  readonly featured_image: string;
  readonly summary: string;
  readonly content: string;
};

let articleCache: ArticleContent[];

function parseArticleContent(fileName): ArticleContent {
  // Read markdown file as string
  const fullPath = path.join(articlesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const article = matter(fileContents);

  const matterResult = {
    ...article.data,
    content: article.content,
  };

  //   console.log(matterResult);

  const matterData = matterResult as {
    id: string;
    title: string;
    slug: string;
    category: string;
    featured_image: string;
    summary: string;
    content: string;
  };

  return matterData;
}

function fetchArticleContent(): any[] {
  if (articleCache && articleCache.length) {
    return articleCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(articlesDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".md"))
    .map((fileName) => {
      try {
        return parseArticleContent(fileName);
      } catch (e) {
        return null;
      }
    })
    .filter((data) => data);
  // Sort posts by date
  articleCache = allPostsData;
  return articleCache;
}

export function listArticleContent(
  page: number,
  limit: number
): ArticleContent[] {
  return fetchArticleContent().slice((page - 1) * limit, page * limit);
}

export function listAllArticleContent(): ArticleContent[] {
  return fetchArticleContent();
}

export function getArticleContent(slug: string | string[]): ArticleContent {
  return fetchArticleContent().find((article) => article.slug === slug);
}
