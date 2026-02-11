import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const About = () => {
  return (
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
  );
};

export default About;
