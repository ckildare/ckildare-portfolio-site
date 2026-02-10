import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const JobCard = ({ job }) => {
  const { title, name, description, startDate, endDate, contributions } = job;

  return (
    <Card
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        minWidth: "18rem",
        maxWidth: "42rem",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary">
            {startDate} – {endDate}
          </Typography>

          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {name}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="text.secondary"
          >
            Description
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="text.secondary"
          >
            Contributions
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mt: 1,
            }}
          >
            {contributions.map((item, key) => (
              <Box key={key} sx={{ display: "flex", gap: 1 }}>
                <Typography color="text.secondary">•</Typography>
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
