import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import { HoverableMediaCard } from "../../components/HoverableMediaCard";
import { LinkRounded } from "@mui/icons-material";

import { ExpandableCard } from "../../components/ExpandableCard";

export const ProjectCard = ({ project }) => {
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

  return (
    <ExpandableCard initialHeight="20rem">
      <CardContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
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
          <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
            Overview
          </Typography>
          <Typography variant="body2">{context}</Typography>
        </Box>

        {concept && (
          <Box>
            <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
              Concept
            </Typography>
            <Typography variant="body2">{concept}</Typography>
          </Box>
        )}

        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
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
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                px: 1.5,
                py: 0.75,
                borderRadius: 1.5,
                fontWeight: 600,
                color: "white",
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.dark" },
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
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                px: 1.5,
                py: 0.75,
                borderRadius: 1.5,
                fontWeight: 600,
                color: "white",
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
              <LinkRounded fontSize="small" />
              Repository
            </Link>
          )}
        </Box>

        {supportingImgs.length > 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
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
      </CardContent>
    </ExpandableCard>
  );
};