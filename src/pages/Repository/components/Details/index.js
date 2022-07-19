import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Code from "@mui/icons-material/Code";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FolderIcon from "@mui/icons-material/Folder";

export default function Details({
  language,
  licenseName,
  stars,
  forks,
  watchers,
  size
}) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<Code />} label={language} variant="outlined" />
      <Chip
        icon={<WorkspacePremiumIcon />}
        label={licenseName}
        variant="outlined"
      />
      <Chip
        icon={<StarBorderIcon />}
        label={`Stars: ${stars}`}
        variant="outlined"
      />
      <Chip
        icon={<ForkRightIcon />}
        label={`Forks: ${forks}`}
        variant="outlined"
      />
      <Chip
        icon={<RemoveRedEyeIcon />}
        label={`Watchers: ${watchers}`}
        variant="outlined"
      />
      <Chip icon={<FolderIcon />} label={`${size} kBs`} variant="outlined" />
    </Stack>
  );
}
