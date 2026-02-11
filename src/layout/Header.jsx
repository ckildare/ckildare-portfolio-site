import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiGitlab } from "react-icons/si";
import Link from "next/link";
import { NavDrawer } from "@/components/NavDrawer";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Work", id: "work" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{ backdropFilter: "blur(10px)" }}
      >
        <Toolbar sx={{ width: "100%", py: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              gap: { xs: 1, md: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "flex-end" },
                gap: 2,
              }}
            >
              <IconButton
                onClick={() => setDrawerOpen(true)}
                aria-label="Open navigation menu"
                alt="Button to open navigation menu"
                sx={{
                  order: { xs: 2, md: 0 },
                  mt: { xs: 1, md: 0 },
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h4" fontWeight={700}>
                  Connor Kildare
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Software Developer
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Link
                href="https://github.com/ckildare"
                target="_blank"
                aria-label="Go to ckildare GitHub page"
                alt="Link to ckildare GitHub page"
              >
                <IconButton
                  color="inherit"
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
                  color="inherit"
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
                  color="inherit"
                  aria-label="LinkedIn icon button"
                  alt="LinkedIn icon button"
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <NavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={navItems}
        onNavigate={handleNavigate}
      />
    </>
  );
}