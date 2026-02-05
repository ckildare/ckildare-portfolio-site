import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ProjectCard } from './ProjectCard';
import { projectData } from './projects';

const ProjectsLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 4, textAlign: 'center' }}
      >
        Projects
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center'
        }}
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Box>
    </Container>
  );
};

export default ProjectsLayout;