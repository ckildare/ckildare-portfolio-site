import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiGitlab } from "react-icons/si";
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <Box display="inline-flex" alignItems="center" gap={3}>
      <Link
        href="https://github.com/ckildare"
        target="_blank"
        aria-label="Go to ckildare GitHub page"
        alt="Link to ckildare GitHub page"
      >
        <IconButton
          color="text.primary"
          aria-label="GitHub icon button"
          alt="GitHub icon button"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Link>

      <Link
        href="https://gitlab.com/ckildare19"
        target="_blank"
        aria-label="Go to ckildare19 GitLab page"
        alt="Link to ckildare19 GitLab page"
      >
        <IconButton
          color="text.primary"
          aria-label="GitLab icon button"
          alt="GitLab icon button"
        >
          <SiGitlab size={28} />
        </IconButton>
      </Link>

      <Link
        href="https://linkedin.com/in/connor-kildare"
        target="_blank"
        aria-label="Go to LinkedIn page"
        alt="Link to LinkedIn page"
      >
        <IconButton
          color="text.primary"
          aria-label="LinkedIn icon button"
          alt="LinkedIn icon button"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Link>
    </Box>
  );
}
