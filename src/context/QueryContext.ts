import { createContext } from "react";
import { QueryContextT } from "../types";

export const QueryContext = createContext<QueryContextT>({
  query: "",
  setQuery: () => {},
  queryMode: false,
  setQueryMode: () => {},
});
