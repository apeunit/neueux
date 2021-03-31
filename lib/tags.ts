import content from "content/meta/attributes.json";

import { listAppContent, getAppContent } from './app';

export type TagContent = {
  readonly id: string;
  readonly name: string;
};

const tagMap: { [key: string]: TagContent } = generateTagMap();

function generateTagMap(): { [key: string]: TagContent } {
  let result: { [key: string]: TagContent } = {};
  for (const tag of content.tags) {
    result[tag.id] = tag;
  }
  return result;
}

export function getTag(slug: string) {
  return tagMap[slug];
}

export function listTags(): TagContent[] {
  return content.tags;
}


export function filteredTagsAll(page: number,
  limit: number) {

  const apps = listAppContent(page, limit);


  return content.tags.filter((tag) => apps.some((app) => app.tags.includes(tag.id)))
}

export function filteredTagsByApp(slug: string) {

  const app = getAppContent(slug);


  return content.tags.filter((tag) => app.tags.includes(tag.id))
}