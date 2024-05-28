export type ButtonT = { callback: () => void; disabled: boolean; text: string };
export type MediaT = {
  name?: string;
  title?: string;
  id: number;
  overview: string;
  backdrop_path: string;
  poster_path: string;
};

export type MediaState = {
  loading: boolean;
  error: boolean;
  data: MediaT[];
};
export type RouteState = {
  loading: boolean;
  error: boolean;
  data: MediaT;
};
export type VideoT = { key: string; name: string, type: string };
