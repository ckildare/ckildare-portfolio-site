import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const JobCard = ({ job }) => {
  const { title, name, startDate, endDate, contributions } = job;

  return (
    <Card
      elevation={3}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        pb: 0,
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight={700}>
            {title} - {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {startDate} – {endDate}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          {contributions.map((item, key) => (
            <Box key={key} sx={{ display: "flex", gap: 1 }}>
              <Typography color="text.secondary">•</Typography>
              <Typography variant="body2">{item}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
