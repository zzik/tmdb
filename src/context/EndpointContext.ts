import { createContext } from "react";
import { EndpointContextT } from "../types/context";

export const EndpointContext = createContext<EndpointContextT>({
  baseLink: "https://api.themoviedb.org/3",
  setBaseLink: () => {},
});
