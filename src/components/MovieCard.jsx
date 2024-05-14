import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { number, string } from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, overview, image_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <ImageListItem >
      <ImageListItemBar
            title={title}
            subtitle={overview}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${title}`}
              >
              </IconButton>
            }
          />
        <img loading="lazy" alt={`${overview}`} src={`https://image.tmdb.org/t/p/w780/${image_path}`} />

      </ImageListItem>
    </Link>
  );
};
MovieCard.propTypes = {
  title: string,
  id: number,
  overview: string,
  image_path: string,
};
export default MovieCard;
