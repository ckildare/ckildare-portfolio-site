import { useState, useRef, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import { HoverableMediaCard } from "../../components/HoverableMediaCard";
import { LinkRounded } from "@mui/icons-material";

export const ProjectCard = ({ project, expanded, onToggle }) => {
  const {
    title,
    shortTitle,
    context,
    concept,
    technologies,
    status,
    projectLink,
    repoLink,
    supportingImgs,
  } = project;

  const [height, setHeight] = useState("20rem");

  const cardRef = useRef(null);
  const contentRef = useRef(null);

  // Smooth scroll helper (300ms)
  const smoothScrollTo = (targetY) => {
    const start = window.scrollY;
    const end = targetY;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / 300, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start + (end - start) * eased);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const centerCardInViewport = (card) => {
    const rect = card.getBoundingClientRect();
    const cardCenterY = rect.top + window.scrollY + rect.height / 2;
    const viewportCenterY = window.innerHeight / 2;
    const targetScrollY = cardCenterY - viewportCenterY;

    smoothScrollTo(targetScrollY);
  };

  // Measure content height when expanded
  useEffect(() => {
    if (expanded) {
      const fullHeight = contentRef.current.scrollHeight;
      setHeight(fullHeight + "px");
    } else {
      setHeight("20rem");
    }
  }, [expanded]);

  const toggleExpand = () => {
    const card = cardRef.current;

    onToggle();

    setTimeout(() => {
      centerCardInViewport(card);
    }, 300);
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
          height: height,
          overflow: "hidden",
          position: "relative",
          transition: "height 0.3s ease-in-out",
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

        <Box
          ref={contentRef}
          sx={{ position: "relative", transition: "none !important" }}
        >
          <CardContent
            sx={{
              p: 0,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              transition: "none !important",
              mb: 1,
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              {title}
            </Typography>

            <Chip
              label={status}
              color={
                status === "FINISHED"
                  ? "success"
                  : status === "IN_PROGRESS"
                  ? "warning"
                  : "default"
              }
              sx={{ width: "fit-content" }}
            />

            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                color="text.secondary"
              >
                Overview
              </Typography>
              <Typography variant="body2">{context}</Typography>
            </Box>

            {concept && (
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  color="text.secondary"
                >
                  Concept
                </Typography>
                <Typography variant="body2">{concept}</Typography>
              </Box>
            )}

            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                color="text.secondary"
              >
                Technologies
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {technologies.map((tech, key) => (
                  <Chip key={key} label={tech} variant="outlined" />
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {projectLink && (
                <Link
                  href={projectLink}
                  target="_blank"
                  underline="none"
                  alt="Link to live project"
                  sx={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 0.75,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 1.5,
                    fontWeight: 600,
                    color: "white",
                    backgroundColor: "primary.main",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  <LinkRounded fontSize="small" />
                  Live Project
                </Link>
              )}

              {repoLink && (
                <Link
                  href={repoLink}
                  target="_blank"
                  underline="none"
                  alt="Link to repository for project"
                  sx={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 0.75,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 1.5,
                    fontWeight: 600,
                    color: "white",
                    backgroundColor: "primary.main",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  <LinkRounded fontSize="small" />
                  Repository
                </Link>
              )}
            </Box>

            {supportingImgs.length > 0 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  color="text.secondary"
                >
                  Screenshots
                </Typography>

                {supportingImgs.map((imgSrc, key) => (
                  <HoverableMediaCard
                    key={key}
                    imgSrc={imgSrc.src}
                    alt={`${shortTitle} screenshot ${key + 1}`}
                  />
                ))}
              </Box>
            )}

            {expanded && (
              <Button
                variant="contained"
                size="small"
                onClick={toggleExpand}
                sx={{
                  fontWeight: 600,
                  borderRadius: 1.5,
                }}
              >
                Collapse
              </Button>
            )}
          </CardContent>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        {!expanded && (
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
        )}
      </Box>
    </Card>
  );
};