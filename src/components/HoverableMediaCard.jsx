import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ImageModal } from "./ImageModal";

export const HoverableMediaCard = ({ images }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [index, setIndex] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [images]);

  const handleOpen = () => setOpenIndex(index);
  const handleClose = () => setOpenIndex(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          borderRadius: 1,
          overflow: "hidden",
          cursor: "pointer",
          "&:hover .hoverMask": {
            opacity: 1,
          },
        }}
        onClick={handleOpen}
      >
        <CardMedia
          component="img"
          image={images[index].src}
          alt={`Screenshot ${index + 1}`}
          sx={{
            width: "stretch",
            height: "auto",
            maxHeight: "10rem",
            borderRadius: 1,
            transition: "opacity 0.5s ease",
          }}
        />

        <Box
          className="hoverMask"
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontWeight: 600,
              borderRadius: 1.5,
            }}
          >
            Expand Image
          </Button>
        </Box>
      </Box>

      {/* Modal viewer */}
      {openIndex !== null && (
        <ImageModal
          images={images}
          openIndex={openIndex}
          onClose={handleClose}
        />
      )}
    </>
  );
};