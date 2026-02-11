import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { technologies, tools } from "data/skills";

export const Skills = () => {
  const CARD_SIZE = 110;

  const renderItems = (items) =>
    items.map(({ name, icon: Icon, color }, idx) => (
      <Grid item key={idx}>
        <Paper
          elevation={2}
          sx={{
            width: CARD_SIZE,
            height: CARD_SIZE, // ⭐ perfect square
            borderRadius: 2,
            backgroundColor: "background.paper",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            p: 2,
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon style={{ color }} size={32} />
          </Box>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", color: "text.primary" }}
          >
            {name}
          </Typography>
        </Paper>
      </Grid>
    ));

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 2, textAlign: "center", color: "text.primary" }}
      >
        Skills
      </Typography>

      <Typography
        variant="h6"
        sx={{ mb: 2, color: "text.primary", fontWeight: 600 }}
      >
        Technologies
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mb: 6 }}>
        {renderItems(technologies)}
      </Grid>

      <Typography
        variant="h6"
        sx={{ mb: 2, color: "text.primary", fontWeight: 600 }}
      >
        Tools
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {renderItems(tools)}
      </Grid>
    </Box>
  );
};
