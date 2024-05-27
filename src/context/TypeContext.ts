import { createContext } from "react";
import { TypeContextT } from "../types";

export const TypeContext = createContext<TypeContextT>({
  type: "tv",
  setType: () => {},
});
