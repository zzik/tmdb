import { QueryHandlerT } from "../types";

const queryHandler = ({ event, queryContext }: QueryHandlerT) => {
  // defaulting form element behavior
  event.preventDefault();

  // defining user input
  const userInput = event.target.value;

  // defining length of user input
  const userInputLength = userInput.length;

  // destructuring query context payload
  const { setQueryMode, setQuery } = queryContext;

  // defining query context values and mutators for the sake of brevity
  const [toggleQueryOn, toggleQueryOff, updateQuery, clearQuery] = [
    () => setQueryMode(true),
    () => setQueryMode(false),
    () => setQuery(event.target.value),
    () => setQuery(""),
  ];

  // set of functions that execute upon condition success
  const success = () => {
    toggleQueryOn();
    updateQuery();
  };

  // set of functions that execute upon condition failure
  const failure = () => {
    clearQuery();
    toggleQueryOff();
  };

  // defining condition parameters
  const condition = userInputLength >= 3;

  // running the check on condition
  condition ? success() : failure();
};

export default queryHandler;
