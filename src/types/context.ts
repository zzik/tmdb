export type QueryContextT = {
  query: string;
  setQuery: (newQuery: string) => void;
  queryMode: boolean;
  setQueryMode: (queryMode: boolean) => void;
};

export type TypeContextT = { type: string; setType: (type: string) => void };

export type EndpointContextT = {
  baseLink: string;
  setBaseLink: (baseLink: string) => void;
};
