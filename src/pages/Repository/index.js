import { useEffect, useState } from "react";
import { formatRelative } from "date-fns";
import { Link } from "react-router-dom";

import Topics from "./components/Topics";
import Details from "./components/Details";
import Avatar from "./components/Avatar";
import Contributors from "./components/Contributors";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import services from "../../services";

export default function Repository() {
  const [, owner, repo] = window.location.pathname.split("/");

  const [repository, setRepository] = useState();
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchRepository = async () => {
      const { data } = await services.github.getRepository(null, {
        path: { owner, repo }
      });

      setRepository(data);
    };

    const fetchContributors = async () => {
      const { data } = await services.github.getRepositoryContributors(null, {
        path: { owner, repo }
      });

      setContributors(data);
    };

    fetchRepository();
    fetchContributors();
  }, []);

  if (!repository) return;

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <Typography color="text.primary">{repository.name}</Typography>
      </Breadcrumbs>
      <h1>{repository.full_name}</h1>
      <p>{repository.description}</p>
      <Topics topics={repository.topics} />
      <Details
        language={repository.language}
        licenseName={repository.license.name}
        stars={repository.stargazers_count}
        forks={repository.forks_count}
        watchers={repository.watchers_count}
        size={repository.size}
      />
      <Box sx={{ my: 1, display: "flex", alignItems: "center" }}>
        <Box sx={{ marginRight: "1rem" }}>
          <strong>Last update: </strong>
          {formatRelative(new Date(repository.updated_at), new Date())}{" "}
        </Box>
        <Box>
          <strong>Homepage: </strong>
          <a href={repository.homepage} target="_blank" rel="noreferrer">
            {repository.homepage}
          </a>
        </Box>
      </Box>
      <Avatar
        imgUrl={repository.owner.avatar_url}
        profileUrl={repository.owner.html_url}
        username={repository.owner.login}
      />
      <Contributors contributors={contributors} />
    </>
  );
}
