import { useState, useRef } from "react";

import LoadingFeedback from "../../components/LoadingFeedback";
import SearchInput from "../../components/SearchInput";
import SelectInput from "../../components/SelectInput";
import Results from "./components/Results";

import services from "../../services";
import { ITEMS_PER_PAGE, SORT_LIST } from "../../constants";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSearchInputInvalid, setIsSearchInputInvalid] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(
    SORT_LIST[0].value
  );

  const searchRef = useRef();

  const fetchData = ({ page }) => {
    return services.github.searchRepositories({
      q: searchRef.current.value,
      sort: selectedSortOption.value,
      per_page: ITEMS_PER_PAGE,
      page
    });
  };

  const updateResults = async ({ page }) => {
    const { data, status } = await fetchData({ page });

    setIsLoading(false);
    setIsLoadingMore(false);
    setSearchHistory((state) => [...state, searchRef.current.value]);

    if (status !== 200) {
      setRepositories([]);
      setTotalCount(0);
      return;
    }

    if (page === 1) {
      setRepositories(data.items);
      setTotalCount(data.total_count);
    } else {
      setRepositories((state) => [...state, ...data.items]);
    }
  };

  const handlerChangeSort = (event) => {
    const { value } = event.target;
    setSelectedSortOption(value);
  };

  const handleSubmitSearch = async (event) => {
    event.preventDefault();

    const searchValue = searchRef.current.value;

    if (!searchValue || searchValue.length < 3) {
      setIsSearchInputInvalid(true);
      return alert("Please insert at least 3 characters.");
    }

    setIsLoading(true);
    setCurrentPage(1);
    updateResults({ page: 1 });
  };

  const handleClickLoadMore = () => {
    const newPage = currentPage + 1;
    setIsLoadingMore(true);
    setCurrentPage(newPage);
    updateResults({ page: newPage });
  };

  return (
    <>
      <form onSubmit={handleSubmitSearch}>
        <SearchInput
          id="search-repositories-input"
          label="Search GitHub repository..."
          onChange={() => setIsSearchInputInvalid(false)}
          inputRef={searchRef}
          history={searchHistory}
          error={isSearchInputInvalid}
        />
      </form>
      <SelectInput
        id="sort-select"
        size="small"
        label="Sort by"
        inputRef={searchRef}
        value={selectedSortOption.value}
        defaultValue={SORT_LIST[0].value}
        onChange={handlerChangeSort}
        options={SORT_LIST}
      />
      <LoadingFeedback isLoading={isLoading} />
      <Results
        repositories={repositories}
        totalCount={totalCount}
        onClickLoadMore={handleClickLoadMore}
        isLoading={isLoadingMore}
      />
    </>
  );
}
