import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { LinkRounded } from "@mui/icons-material";

import { HoverableMediaCard } from "@/components/HoverableMediaCard";

export const ProjectCard = ({ project }) => {
  const { title, description, projectLink, repoLink, supportingImgs } = project;

  return (
    <Card
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        minWidth: "18rem",
        maxWidth: "42rem",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {supportingImgs?.length > 0 && (
        <HoverableMediaCard
          images={supportingImgs}
        />
      )}

      <CardContent
        sx={{
          p: 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>

        <Typography variant="body2">{description}</Typography>

        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 1, mt: "auto" }}
        >
          {projectLink && (
            <Link
              href={projectLink}
              target="_blank"
              underline="none"
              alt="Link to view project"
              aria-label="Go to live project"
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
              alt="Link to view project repo"
              aria-label="Go to project GitHub page"
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
      </CardContent>
    </Card>
  );
};
