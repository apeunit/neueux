import content from "content/meta/attributes.json";

import { listAppContent, getAppContent } from './app';

export type UserflowContent = {
  readonly id: string;
  readonly name: string;
};

const userflowMap: { [key: string]: UserflowContent } = generateUserflowMap();

function generateUserflowMap(): { [key: string]: UserflowContent } {
  let result: { [key: string]: UserflowContent } = {};
  for (const userflow of content.userflows) {
    result[userflow.id] = userflow;
  }
  return result;
}

export function getUserflow(id: string) {
  return userflowMap[id];
}


export function listUserflows() {
  return content.userflows;
}

export function filteredUserflowsAll(page: number,
  limit: number) {

  const apps = listAppContent(page, limit);


  return content.userflows.filter((userflow) => apps.some((app) => app.userflows.includes(userflow.id)))
}

export function filteredUserflowsByApp(slug: string) {

  const app = getAppContent(slug);


  return content.userflows.filter((userflow) => app.userflows.includes(userflow.id))
}