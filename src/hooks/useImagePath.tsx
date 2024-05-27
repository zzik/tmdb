const useImagePath = ({
  backdrop_path,
  poster_path,
}: {
  backdrop_path: string;
  poster_path: string;
}) => {
  let image_link;
  if (backdrop_path) {
    image_link = `https://image.tmdb.org/t/p/w780/${backdrop_path}`;
  } else if (poster_path) {
    image_link = `https://image.tmdb.org/t/p/w780/${poster_path}`;
  } else {
    image_link = "https://acullen-portfolio.eddl.tru.ca/wp-content/themes/koji/assets/images/default-fallback-image.png";
  }

  return image_link;
};

export default useImagePath;