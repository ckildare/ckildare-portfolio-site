import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import mePhoto from "data/me.webp";

const About = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h4" fontWeight={700} gutterBottom>
        About Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: 3,
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: 220 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={mePhoto}
            alt="Photo of Connor Kildare"
            width={220}
            height={220}
            style={{
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ flex: 1, fontSize: "1.25rem" }}>
          Howdy! I am a Software Engineer with hands-on experience in enterprise
          systems, full-stack development, and agile methodologies delivering
          production solutions across e-commerce and logistics domains.
        </Typography>
      </Box>
    </Paper>
  );
};

export default About;