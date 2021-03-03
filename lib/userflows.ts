import content from "../content/meta/userflows.yml";

import { listAppContent, getAppContent } from './app';

export type UserflowContent = {
  readonly slug: string;
  readonly name: string;
};

const userflowMap: { [key: string]: UserflowContent } = generateUserflowMap();

function generateUserflowMap(): { [key: string]: UserflowContent } {
  let result: { [key: string]: UserflowContent } = {};
  for (const userflow of content.userflows) {
    result[userflow.slug] = userflow;
  }
  return result;
}

export function getUserflow(slug: string) {
  return userflowMap[slug];
}


export function listUserflows() {
  return content.userflows;
}

export function filteredUserflowsAll(page: number,
  limit: number) {

  const apps = listAppContent(page, limit);


  return content.userflows.filter((userflow) => apps.some((app) => app.userflows.includes(userflow.slug)))
}

export function filteredUserflowsByApp(slug: string) {

  const app = getAppContent(slug);


  return content.userflows.filter((userflow) => app.userflows.includes(userflow.slug))
}