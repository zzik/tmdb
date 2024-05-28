const constructVideo = ({
  contentType,
  id,
}: {
  contentType: string;
  id: string;
}) => {
  const link = `https://api.themoviedb.org/3/${contentType}/${id}/videos`;
  return link;
};

export default constructVideo;
