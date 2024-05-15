import { createContext } from "react";

export const TypeContext = createContext<{ type: string; setType: (newType:string) => void }>(
  { type: "movie", setType: () => {} }
);
