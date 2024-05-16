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
