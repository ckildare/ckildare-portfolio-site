import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Header from '@/layout/Header';
import WorkLayout from '@/layout/work/WorkLayout';
import ProjectsLayout from '@/layout/projects/ProjectsLayout';
import { Contact } from '@/layout/contacts/Contact';
import { Skills } from '@/layout/skills/Skills';

export default function Index() {
  return (
    <Box>
      <Header />
      <Box sx={{ mt: 6 }}>
        <Container maxWidth="md" sx={{ mb: 8 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I'm a software developer with a passion for building clean, efficient,
              and user‑focused applications. I enjoy working across the stack and
              constantly learning new technologies to expand my skill set.
            </Typography>
          </Paper>
        </Container>

        <ProjectsLayout />
        <WorkLayout />
        <Skills />
        <Contact />
      </Box>
    </Box>
  );
}
