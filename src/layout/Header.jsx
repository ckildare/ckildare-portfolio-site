import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

// MUI Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { SiGitlab } from "react-icons/si"; // GitLab isn't in MUI, this is the cleanest option

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: "blur(10px)" }}
    >
      <Toolbar sx={{ display: "flex", flexDirection: "column", py: 2 }}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: 2, mt: 2 }}>
            <Typography variant="h4" fontWeight={700}>
              Connor Kildare
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Software Developer
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
            <Link href="https://github.com/ckildare" target="_blank">
              <IconButton color="inherit">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Link>

            <Link href="https://gitlab.com/ckildare19" target="_blank">
              <IconButton color="inherit">
                <SiGitlab size={28} />
              </IconButton>
            </Link>

            <Link href="https://linkedin.com/in/connor-kildare" target="_blank">
              <IconButton color="inherit">
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Link>

            <Link href="mailto:ckildare10@gmail.com">
              <IconButton color="inherit">
                <EmailIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
