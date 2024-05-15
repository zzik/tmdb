export type ContentType = 'movie' | 'tv_show'
export type ContentTypeT = {
  contentType: string,
  setContentType: () => void
}
export type ShowT = {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
};
export type ShowData = {
  id: number;
  name: string;
  overview: string;
  image_path: string;
};
export type ShowState = {
  loading: boolean;
  error: boolean;
  shows: ShowT[];
};
export type MovieT = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
};

export type MovieData = {
  id: number;
  title: string;
  overview: string;
  image_path: string;
};
export type MovieState = {
  loading: boolean;
  error: boolean;
  movies: MovieT[];
};
