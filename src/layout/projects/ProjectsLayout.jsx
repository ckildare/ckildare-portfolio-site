import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GridLayout } from "../../components/GridLayout";
import { ProjectCard } from "./ProjectCard";
import { projectData } from "./projects";

const ProjectsLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
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
    </Container>
  );
};

export default ProjectsLayout;