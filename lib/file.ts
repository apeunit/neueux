import fs from "fs";

export default class File {
  static openDirectory(directory: string): string[] {
    try {
      return fs.readdirSync(directory);
    } catch (e) {
      return [];
    }
  }
  static open(path) {
    try {
      return fs.readFileSync(path, "utf8");
    } catch (e) {
      return null;
    }
  }
}
