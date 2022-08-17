import { useMediaQuery } from "react-responsive";
import SearchFormMobile from "./search-form-mobile/search-form-mobile";
import SearchForm from "./search-form/search-form";
function Search({ ...others }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <>
      {isMobile ? <SearchFormMobile {...others} /> : <SearchForm {...others} />}
    </>
  );
}

export default Search;
