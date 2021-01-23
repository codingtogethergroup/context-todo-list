import { isNew } from "./constants";
import { v4 as uuid } from "uuid";

export function generateTodo() {
  return { name: "", status: isNew, id: uuid() };
}
