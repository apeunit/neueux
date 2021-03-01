<<<<<<< HEAD
import content from "../meta/userflows.yml";

export type UserflowContent = {
  readonly slug: string;
  readonly name: string;
};

const userflowMap: { [key: string]: UserflowContent } = generateAuthorMap();

function generateAuthorMap(): { [key: string]: UserflowContent } {
  let result: { [key: string]: UserflowContent } = {};
  for (const userflow of content.userflows) {
    result[userflow.slug] = userflow;
  }
  return result;
}

export function getAuthor(slug: string) {
  return userflowMap[slug];
}
=======
import content from "../content/meta/userflows.yml";

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
>>>>>>> main
