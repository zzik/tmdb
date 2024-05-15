import { useContext } from "react"
import { QueryContext } from "../context/QueryContext"
import { TypeContext } from "../context/TypeContext"
import MoviesContainer from "./top_movies/MoviesContainer"
import ShowsContainer from "./top_shows/ShowsContainer"


const DataList = () => {
  const queryContext = useContext(QueryContext)
  const typeContext = useContext(TypeContext)
  const dataType = typeContext.type === "movie" ? <MoviesContainer /> : <ShowsContainer />
  return (
    <>
    {dataType}
    <p>
      {queryContext.query}
    </p>
    </>
  )
}

export default DataList