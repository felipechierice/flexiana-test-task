import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Topics({ topics }) {
  return (
    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
      {topics &&
        topics.map((topic) => <Chip key={topic} label={topic} size="small" />)}
    </Stack>
  );
}
