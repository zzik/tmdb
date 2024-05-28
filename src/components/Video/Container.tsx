import useFetchVideo from "../../hooks/useFetchVideo";
import { VideoT } from "../../types/components";
import List from "./List";
// import { TypeContext } from "../../context";
// import { useContext } from "react";
import constructVideo from "../../utils/constructVideo";
import { useParams } from "react-router-dom";

const Container = ({imagePath, alt}:{imagePath:string, alt:string}) => {
  const params = useParams()
  const route = constructVideo({ contentType: params.contentType as string, id:params.id as string});
  const [data, loading, error] = useFetchVideo(route);
  return (
    <List
      data={data as VideoT[]}
      loading={loading as boolean}
      error={error as boolean}
      imageBackup={imagePath}
      alt={alt}
    />
  );
};

export default Container;
