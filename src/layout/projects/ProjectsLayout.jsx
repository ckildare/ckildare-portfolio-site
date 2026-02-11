import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import { GridLayout } from "../../components/GridLayout";
import { projectData } from "data/projects";
import { Box } from "@mui/material";

const ProjectCard = dynamic(
  () =>
    import("./ProjectCard.jsx").then((mod) => ({
      default: mod.ProjectCard,
    })),
  { ssr: false }
);

const ProjectsLayout = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 4, textAlign: "center" }}
      >
        Projects
      </Typography>

      <GridLayout>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </GridLayout>
    </Box>
  );
};

export default ProjectsLayout;