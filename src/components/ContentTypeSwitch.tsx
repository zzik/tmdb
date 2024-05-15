import { useContext } from "react";
import { TypeContext } from "../context/TypeContext";

const ContentTypeSwitch = () => {
  const ctx = useContext(TypeContext);
  const handler = () => {
    ctx.type === "movie" ? ctx.setType("tv_show") : ctx.setType("movie");
  };
  const disabled = ctx.type === "movie";
  return (
    <div>
      <button onClick={handler} disabled={disabled}>
        Movies
      </button>
      <button onClick={handler} disabled={!disabled}>
        TV Shows
      </button>
    </div>
  );
};

export default ContentTypeSwitch;
