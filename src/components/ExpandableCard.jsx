import { useState, useRef, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const ExpandableCard = ({
  initialHeight = "20rem",
  duration = 300,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(initialHeight);

  const cardRef = useRef(null);
  const contentRef = useRef(null);

  const smoothScrollTo = (targetY) => {
    const start = window.scrollY;
    const end = targetY;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      window.scrollTo(0, start + (end - start) * eased);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const centerCardInViewport = () => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cardCenterY = rect.top + window.scrollY + rect.height / 2;
    const viewportCenterY = window.innerHeight / 2;
    const targetScrollY = cardCenterY - viewportCenterY;

    smoothScrollTo(targetScrollY);
  };

  useEffect(() => {
    if (expanded) {
      const fullHeight = contentRef.current?.scrollHeight ?? 0;
      setHeight(fullHeight + "px");
    } else {
      setHeight(initialHeight);
    }
  }, [expanded, initialHeight]);

  const toggleExpand = () => {
    const wasExpanded = expanded;
    setExpanded((prev) => !prev);

    if (wasExpanded) {
      setTimeout(() => {
        centerCardInViewport();
      }, duration);
    }
  };

  return (
    <Card
      ref={cardRef}
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        minWidth: "18rem",
        maxWidth: "32rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height,
          overflow: "hidden",
          position: "relative",
          transition: `height ${duration}ms ease-in-out`,
        }}
      >
        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "4rem",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        )}

        <Box ref={contentRef} sx={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", }}>
          {children}

          {expanded && (
            <Button
              variant="contained"
              size="small"
              onClick={toggleExpand}
              sx={{
                fontWeight: 600,
                borderRadius: 1.5,
                mt: 2,
              }}
            >
              Collapse
            </Button>
          )}
        </Box>
      </Box>

      {!expanded && (
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={toggleExpand}
            sx={{
              fontWeight: 600,
              borderRadius: 1.5,
            }}
          >
            Expand
          </Button>
        </Box>
      )}
    </Card>
  );
};