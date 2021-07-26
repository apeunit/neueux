import { Form } from "tinacms";
import { Field as FieldCore } from "tinacms";

export interface Field extends FieldCore {
  options?: any[];
  uploadDir?(form: Form): string;
  itemProps?(item: any): {
    key?: string;
    label?: string;
  };
  defaultItem?: object | (() => object) | string;
}
