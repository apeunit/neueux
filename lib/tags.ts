import tags from "../content/meta/tags.yml";

import { listAppContent, getAppContent } from './app';

export type TagContent = {
  readonly slug: string;
  readonly name: string;
};

const tagMap: { [key: string]: TagContent } = generateTagMap();

function generateTagMap(): { [key: string]: TagContent } {
  let result: { [key: string]: TagContent } = {};
  for (const tag of tags.tags) {
    result[tag.slug] = tag;
  }
  return result;
}

export function getTag(slug: string) {
  return tagMap[slug];
}

export function listTags(): TagContent[] {
  return tags.tags;
}


export function filteredTagsAll(page: number,
  limit: number) {

  const apps = listAppContent(page, limit);


  return tags.tags.filter((tag) => apps.some((app) => app.tags.includes(tag.slug)))
}

export function filteredTagsByApp(slug: string) {

  const app = getAppContent(slug);


  return tags.tags.filter((tag) => app.tags.includes(tag.slug))
}