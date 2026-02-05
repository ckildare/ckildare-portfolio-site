import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { JobCard } from './JobCard';
import workData from './work.json';

const WorkLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography 
        variant="h4" 
        fontWeight={700} 
        sx={{ mb: 4, textAlign: 'center' }}
      >
        Work Experience
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center'
        }}
      >
        {workData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </Box>
    </Container>
  );
};

export default WorkLayout;