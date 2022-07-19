import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectInput({
  id,
  label,
  defaultValue,
  value,
  onChange,
  options,
  size = "medium"
}) {
  const labelId = `${id}-label`;

  return (
    <FormControl margin="dense">
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        id={id}
        labelId={labelId}
        size={size}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        label={label}
      >
        {options &&
          options.map((sortItem) => (
            <MenuItem key={sortItem.id} value={sortItem.value}>
              {sortItem.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
