import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { JobCard } from "./JobCard";
import workData from "data/work.json";

const WorkLayout = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 4, textAlign: "center" }}
      >
        Work Experience
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {workData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </Box>
    </Box>
  );
};

export default WorkLayout;