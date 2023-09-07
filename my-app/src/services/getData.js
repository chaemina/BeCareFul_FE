import { PythonInstance } from "./api";

export const getData = () => {
  return PythonInstance.get("main");
};
