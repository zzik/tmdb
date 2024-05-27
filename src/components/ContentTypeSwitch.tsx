import { useContext } from "react";
import { TypeContext } from "../context";
import Button from "./Button";

const ContentTypeSwitch = () => {
  const { type, setType } = useContext(TypeContext);
  const isTV = type === "tv";
  console.log(type)
  const typeHandler = () => {
    if (isTV) {
      setType("movie");
    } else {
      setType("tv");
    }
  };

  return (
    <div className="content-type-switch">
      <Button text="Movies" callback={typeHandler} disabled={!isTV} />
      <Button text="TV shows" callback={typeHandler} disabled={isTV} />
    </div>
  );
};

export default ContentTypeSwitch;
