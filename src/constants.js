const HTTP_CODES = {
  SUCCESS_OK: 200,
  NOT_FOUND: 404
};

const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS"
};

const ITEMS_PER_PAGE = 20;

const SORT_LIST = [
  { id: 0, label: "Best match", value: "best-match" },
  { id: 1, label: "By stars", value: "stars" },
  { id: 2, label: "By forks", value: "forks" },
  { id: 3, label: "By issues", value: "help-wanted-issues" },
  { id: 4, label: "Last updated", value: "updated" }
];

export { HTTP_CODES, HTTP_METHODS, ITEMS_PER_PAGE, SORT_LIST };
