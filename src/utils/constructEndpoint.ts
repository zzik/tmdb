const constructEndpoint = (queryMode:boolean, query:string, baseLink:string, type:string) => {
  const queryModeCheck = queryMode ? "/search/" : "/";
  const topRatedCheck = queryMode ? "" : "/top_rated";
  const queryAppend = queryMode ? `?query=${query}` : "";

  return `${baseLink}${queryModeCheck}${type}${topRatedCheck}${queryAppend}`;
};

export default constructEndpoint;
