import { createContext } from "react";

export const EndpointContext = createContext<{
  baseLink: string;
  setBaseLink: (baseLink: string) => void;
}>({
  baseLink: "https://api.themoviedb.org/3",
  setBaseLink: () => {},
});
