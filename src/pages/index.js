import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "@/layout/Header";
import WorkLayout from "@/layout/work/WorkLayout";
import ProjectsLayout from "@/layout/projects/ProjectsLayout";
import { Contact } from "@/layout/contacts/Contact";
import { Skills } from "@/layout/skills/Skills";
import About from "@/layout/About/About";
import { Typography } from "@mui/material";

export default function Index() {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{
        my: 6,
        display: "flex",
        flexDirection: "column",
        gap: 3
      }}>
        <section id="about">
          <About />
        </section>

        <section id="projects">
          <ProjectsLayout />
        </section>

        <section id="work">
          <WorkLayout />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Typography variant="body2" fontWeight={700} sx={{ alignSelf: "center", color: "text.secondary" }}>
          Connor Kildare @2026
        </Typography>
      </Container>
    </Box>
  );
}