import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

export const ImageModal = ({ images, openIndex, onClose }) => {
  const [index, setIndex] = useState(openIndex);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <Modal open={openIndex !== null} onClose={onClose}>
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
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        {images.length > 1 && (
          <IconButton
            onClick={prev}
            sx={{
              position: "absolute",
              top: "50%",
              left: -50,
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>
        )}

        <Box
          component="img"
          src={images[index].src}
          alt={`Screenshot ${index + 1}`}
          sx={{
            maxHeight: "90vh",
            maxWidth: "90vw",
            borderRadius: 1,
            display: "block",
          }}
        />

        {images.length > 1 && (
          <IconButton
            onClick={next}
            sx={{
              position: "absolute",
              top: "50%",
              right: -50,
              transform: "translateY(-50%)",
              color: "white",
            }}
          >
            <ChevronRight fontSize="large" />
          </IconButton>
        )}
      </Box>
    </Modal>
  );
};