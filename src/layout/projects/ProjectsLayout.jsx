import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ProjectCard } from './ProjectCard';
import { projectData } from './projects';
import { useState } from 'react';

const ProjectsLayout = () => {
  // Track expanded card per column
  const [expandedByColumn, setExpandedByColumn] = useState({
    0: null,
    1: null,
    2: null,
  });

  const handleToggle = (index, col) => {
    setExpandedByColumn(prev => ({
      ...prev,
      [col]: prev[col] === index ? null : index,
    }));
  };

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
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          gap: 2,
          alignItems: 'start', 
        }}
      >
        {projectData.map((project, index) => {
          const col = index % 3; // 3 columns at md+
          const expanded = expandedByColumn[col] === index;

          return (
            <ProjectCard
              key={index}
              project={project}
              expanded={expanded}
              onToggle={() => handleToggle(index, col)}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default ProjectsLayout;