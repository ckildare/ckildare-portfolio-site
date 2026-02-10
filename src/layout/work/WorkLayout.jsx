import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { GridLayout } from "../../components/GridLayout";
import { JobCard } from "./JobCard";
import workData from "./work.json";

const WorkLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 4, textAlign: "center" }}
      >
        Work Experience
      </Typography>

      <GridLayout>
        {workData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </GridLayout>
    </Container>
  );
};

export default WorkLayout;