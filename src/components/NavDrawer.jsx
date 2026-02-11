import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiGitlab } from "react-icons/si";
import Link from "next/link";

export function NavDrawer({ open, onClose, navItems, onNavigate }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 260, p: 2, position: "relative" }}>
        <IconButton
          onClick={onClose}
          aria-label="Close navigation menu"
          alt="Button to close navigation menu"
          sx={{
            position: "absolute",
            top: 8,
            right: 8
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" fontWeight={700} sx={{ mb: 2, mt: 4 }}>
          Navigation
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => onNavigate(item.id)}
                aria-label={`Navigate to ${item.label}`}
                alt={`Navigate to ${item.label}`}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
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
              <GitHubIcon />
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
              <SiGitlab size={22} />
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
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
}