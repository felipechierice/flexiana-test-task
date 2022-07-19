import styled from "@mui/system/styled";

const AvatarWrapper = styled("a")(() => ({
  display: "flex",
  alignItems: "center"
}));

const AvatarImg = styled("img")(() => ({
  borderRadius: "50%",
  width: "48px",
  marginRight: ".5rem"
}));

export default function Avatar({ imgUrl, profileUrl, username }) {
  return (
    <AvatarWrapper href={profileUrl} target="_blank" rel="noreferrer">
      <AvatarImg src={imgUrl} />
      {username}
    </AvatarWrapper>
  );
}
