import SearchBar from "./SearchBar";
import ContentTypeSwitch from "./ContentTypeSwitch";
import { MediaContainer } from "./Media";
import Title from "./Title";

const Display = () => {
  return (
    <main className="display">
      <Title />
      <SearchBar />
      <ContentTypeSwitch />
      <MediaContainer />
    </main>
  );
};

export default Display;
