import { EndpointGeneratorT } from "../types";

const constructEndpoint = ({
  queryMode,
  query,
  baseLink,
  type,
}: EndpointGeneratorT) => {
  const queryModeCheck = queryMode ? "/search/" : "/";
  const topRatedCheck = queryMode ? "" : "/top_rated";
  const queryAppend = queryMode ? `?query=${query}` : "";

  return `${baseLink}${queryModeCheck}${type}${topRatedCheck}${queryAppend}`;
};

export default constructEndpoint;
