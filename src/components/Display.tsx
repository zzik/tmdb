import SearchBar from "./SearchBar";
import ContentTypeSwitch from "./ContentTypeSwitch";
import MediaContainer from "./Media/MediaContainer";

const Display = () => {
  return (
    <main className="display">
        <SearchBar />
        <ContentTypeSwitch />
        <MediaContainer />
    </main>
  );
};

export default Display;
