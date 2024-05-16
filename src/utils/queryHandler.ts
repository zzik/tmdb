import { QueryContextT } from "../types";


const queryHandler = (event: React.ChangeEvent<HTMLInputElement>, queryContext: QueryContextT) => {

    const queryLength = event.target.value.length;

    const queryFactory = {
      startQuery : () => queryContext.setQueryMode(true),
      updateQuery : () => queryContext.setQuery(event.target.value),
      clearQuery : () => queryContext.setQuery(""),
      stopQuery : () => queryContext.setQueryMode(false)
    }

    const {startQuery, updateQuery, clearQuery, stopQuery} = queryFactory

  if (queryLength >= 3) {
    startQuery()
    updateQuery()
  } else {
    clearQuery()
    stopQuery()
  }
};

export default queryHandler