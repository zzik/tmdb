export type EndpointGeneratorT = {
  queryMode: boolean,
  query: string,
  baseLink: string,
  type: string
}
export type QueryHandlerT = {
  event: React.ChangeEvent<HTMLInputElement>;
   queryContext: QueryContextT;
  }
export type RouteDataT = {
  title?: string;
  name: string;
  id: number;
  overview: string;
  backdrop_path: string;
};
export type RouteState = {
  loading: boolean;
  error: boolean;
  data: RouteDataT;
};
export type MediaData = {
  id: number;
  title: string;
  overview: string;
  image_path: string;
};
export type MediaType = {
  mediaType: string;
  baseLink: string;
};
export type MediaState = {
  loading: boolean;
  error: boolean;
  media: MediaT[];
};
export type MediaT = {
  title?: string;
  name: string;
  id: number;
  overview: string;
  backdrop_path: string;
};
export type QueryContextT = {
  query: string;
  setQuery: (newQuery: string) => void;
  queryMode: boolean;
  setQueryMode: (queryMode: boolean) => void;
};
export type ButtonT = { callback: () => void; disabled: boolean; text: string };
export type TypeContextT = { type: string; setType: (type: string) => void };
