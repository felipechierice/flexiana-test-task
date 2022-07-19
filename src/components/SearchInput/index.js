import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import TextInput from "../TextInput";

export default function SearchInput({
  id,
  label,
  inputRef,
  history,
  onChange,
  error
}) {
  return (
    <TextInput
      id={id}
      label={label}
      inputRef={inputRef}
      options={history}
      error={error}
      onChange={onChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      type="search"
    />
  );
}
