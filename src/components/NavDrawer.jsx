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
import { ResumeButton } from "./ResumeButton";
import { SocialLinks } from "./SocialLinks";

export function NavDrawer({ open, onClose, navItems, onNavigate }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 260, p: 2, position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            mt: 4,
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            Navigation
          </Typography>

          <IconButton
            onClick={onClose}
            aria-label="Close navigation menu"
            alt="Button to close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

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

        <Box sx={{ mt: 3 }}>
          <ResumeButton />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SocialLinks />
        </Box>
      </Box>
    </Drawer>
  );
}
