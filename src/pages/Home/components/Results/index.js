import { formatRelative } from "date-fns";
import { Link } from "react-router-dom";

import styled from "@mui/system/styled";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarBorder from "@mui/icons-material/StarBorder";
import Code from "@mui/icons-material/Code";
import Update from "@mui/icons-material/Update";

const MAX_DESCRIPTION_LENGTH = 64;

const RepoInfoWrapper = styled("div")(() => ({
  display: "flex"
}));

const RepoInfoItem = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginRight: "1rem",
  "& sgv": {
    marginRight: "0.5rem"
  }
}));

function Repository({
  id,
  fullName,
  description = "",
  updatedAt,
  language,
  stargazersCount
}) {
  const truncatedDescription =
    description && description.length > MAX_DESCRIPTION_LENGTH
      ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : description;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link to={`/${fullName}`}>{fullName}</Link>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {truncatedDescription}
        </Typography>
        <RepoInfoWrapper>
          <RepoInfoItem>
            <StarBorder />
            {stargazersCount}
          </RepoInfoItem>
          <RepoInfoItem>
            <Code />
            {language}
          </RepoInfoItem>
          <RepoInfoItem>
            <Update />
            {formatRelative(new Date(updatedAt), new Date())}
          </RepoInfoItem>
        </RepoInfoWrapper>
      </CardContent>
    </Card>
  );
}

export default function Results({
  repositories,
  totalCount,
  onClickLoadMore,
  isLoading
}) {
  if (!repositories || !repositories.length || !totalCount) return;

  return (
    <div>
      <h4>Showing {totalCount} available repository results</h4>
      {repositories.map((repo) => (
        <Repository
          key={repo.id}
          id={repo.id}
          fullName={repo.full_name}
          description={repo.description}
          updatedAt={repo.updated_at}
          language={repo.language}
          stargazersCount={repo.stargazers_count}
        />
      ))}
      {repositories.length < totalCount && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <LoadingButton
            variant="outlined"
            loading={isLoading}
            onClick={onClickLoadMore}
          >
            Load more
          </LoadingButton>
        </Box>
      )}
    </div>
  );
}
