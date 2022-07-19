import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function TextInput({
  id,
  label,
  inputRef,
  InputProps,
  onChange,
  error,
  type = "text",
  disableClearable = false,
  options = []
}) {
  return (
    <Autocomplete
      id={id}
      freeSolo
      disableClearable={disableClearable}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          onChange={onChange}
          label={label}
          inputRef={inputRef}
          InputProps={{
            ...InputProps,
            type
          }}
        />
      )}
    />
  );
}
