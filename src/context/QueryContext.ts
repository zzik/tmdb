import { createContext } from "react";

export const QueryContext = createContext<{ query: string; setQuery: (newQuery:string) => void }>(
  { query: "", setQuery: () => {} }
);
