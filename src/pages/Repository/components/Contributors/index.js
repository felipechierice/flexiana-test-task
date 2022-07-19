import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import styled from "@mui/system/styled";

const AvatarImg = styled("img")(() => ({
  borderRadius: "50%",
  width: "48px",
  marginRight: ".5rem"
}));

export default function Contributors({ contributors }) {
  return (
    <>
      <h3>Contributors</h3>
      <Stack direction="row" spacing={1}>
        {contributors.map((contributor) => (
          <a href={contributor.html_url} target="_blank" rel="noreferrer">
            <Chip
              avatar={
                <AvatarImg
                  alt={contributor.login}
                  src={contributor.avatar_url}
                />
              }
              label={contributor.login}
              variant="outlined"
            />
          </a>
        ))}
      </Stack>
    </>
  );
}
