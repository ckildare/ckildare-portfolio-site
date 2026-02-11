import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import { resumeBase64 } from "data/resume.js";

const openResume = () => {
  const byteCharacters = atob(resumeBase64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
};

export function ResumeButton() {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<DescriptionIcon />}
      sx={{ fontWeight: 600, borderRadius: 2, width: "100%" }}
      onClick={openResume}
      aria-label="View Connor Kildare resume"
      alt="Button to view Connor Kildare resume"
    >
      View Résumé
    </Button>
  );
}