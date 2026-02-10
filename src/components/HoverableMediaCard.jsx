import { useState } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export const HoverableMediaCard = ({ imgSrc, alt }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Image wrapper with hover overlay */}
      <Box
        sx={{
          position: "relative",
          borderRadius: 1,
          overflow: "hidden",
          cursor: "pointer",
          "&:hover .overlay": {
            opacity: 1,
          },
        }}
        onClick={() => setOpen(true)}
      >
        <CardMedia
          component="img"
          image={imgSrc}
          alt={alt}
          sx={{ display: "block", width: "100%", borderRadius: 1 }}
        />

        {/* Hover overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            p: 2,
          }}
        >
          <Button variant="contained" color="primary">
            Expand
          </Button>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        disableScrollLock
        slotProps={{
          backdrop: {
            timeout: 300, // match fade duration
            sx: {
              backgroundColor: "rgba(0,0,0,0.5)", // 50% gray backdrop
            },
          },
        }}
      >
        <Fade in={open} timeout={350}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              outline: "none",
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "white",
                zIndex: 10,
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.5)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              component="img"
              src={imgSrc}
              alt={alt}
              sx={{
                width: "75vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: 1,
                display: "block",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
