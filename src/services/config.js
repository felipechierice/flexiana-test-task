import { HTTP_METHODS } from "../constants";

const APIS = {
  GITHUB: {
    ROOT_URL: "https://api.github.com",
    END_POINTS: {
      SEARCH_REPOSITORIES: {
        PATH: "search/repositories",
        HTTP_METHOD: HTTP_METHODS.GET
      },
      GET_REPOSITORY: {
        PATH: "repos/:owner/:repo",
        HTTP_METHOD: HTTP_METHODS.GET
      },
      GET_REPOSITORY_CONTRIBUTORS: {
        PATH: "repos/:owner/:repo/contributors",
        HTTP_METHOD: HTTP_METHODS.GET
      }
    }
  }
};

export default APIS;
