import { QueryContextT } from "./context";
export type QueryHandlerT = {
  event: React.ChangeEvent<HTMLInputElement>;
  queryContext: QueryContextT;
};

export type EndpointGeneratorT = {
  queryMode: boolean;
  query: string;
  baseLink: string;
  type: string;
};
