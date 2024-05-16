import { useContext } from "react";
import { TypeContext } from "../context";
import Button from "./Button";

const ContentTypeSwitch = () => {
  const {type, setType} = useContext(TypeContext);
  const isMovie = type === "movie"

  const typeHandler = () => {
    if (isMovie) {
      setType("tv");
    } else {
      setType("movie");
    }
  };

  return (
    <div>
      <Button text="Movies" callback={typeHandler} disabled={isMovie} />
      <Button text="TV shows" callback={typeHandler} disabled={!isMovie} />
    </div>
  );
};

export default ContentTypeSwitch;
