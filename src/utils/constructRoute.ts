const constructRoute = (contentType: string, id: string, baseLink: string) => {
  const link = `${baseLink}/${contentType}/${id}`;
  return link;
};

export default constructRoute;
