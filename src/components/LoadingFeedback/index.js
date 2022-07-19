import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingFeedback({ isLoading }) {
  return (
    isLoading && (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    )
  );
}
