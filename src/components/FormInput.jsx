import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export function FormInput({
  label,
  name,
  value,
  onChange,
  required,
  error,
  helperText,
  multiline,
  minRows
}) {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 0.5, color: "text.secondary" }}>
        {label} {required && <Box component="span" sx={{ color: "error.main" }}>*</Box>}
      </Typography>
      <TextField
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
        error={Boolean(error)}
        helperText={error ? helperText : ""}
        multiline={multiline}
        minRows={minRows}
      />
    </Box>
  );
}