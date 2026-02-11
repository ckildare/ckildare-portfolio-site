import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const AlertMessage = ({ open, type, message, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity={type}
        variant="filled"
        onClose={onClose}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};