import { useContext } from "react";
import { QueryContext, TypeContext, EndpointContext } from "../context";
import { constructEndpoint } from "../utils";

const useEndpoint = () => {
  const { queryMode, query } = useContext(QueryContext);
  const { type } = useContext(TypeContext);
  const { baseLink } = useContext(EndpointContext);

  const endpoint = constructEndpoint({queryMode, query, baseLink, type});

  return endpoint;
};

export default useEndpoint;
