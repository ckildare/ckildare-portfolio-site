import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';

export const ProjectCard = ({ project }) => {
  const {
    title,
    shortTitle,
    context,
    concept,
    technologies,
    status,
    projectLink,
    repoLink,
    supportingImgs
  } = project;

  return (
    <Card
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        minWidth: '18rem',
        maxWidth: '32rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}
    >
      <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>

        {/* Title */}
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>

        {/* Status */}
        <Chip 
          label={status} 
          color={
            status === 'FINISHED' ? 'success' :
            status === 'IN_PROGRESS' ? 'warning' :
            'default'
          }
          sx={{ width: 'fit-content' }}
        />

        {/* Context */}
        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
            Overview
          </Typography>
          <Typography variant="body2">
            {context}
          </Typography>
        </Box>

        {/* Concept (optional) */}
        {concept && (
          <Box>
            <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
              Concept
            </Typography>
            <Typography variant="body2">
              {concept}
            </Typography>
          </Box>
        )}

        {/* Technologies */}
        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
            Technologies
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {technologies.map((tech, key) => (
              <Chip key={key} label={tech} variant="outlined" />
            ))}
          </Box>
        </Box>

        {/* Links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {projectLink && (
            <Link href={projectLink} target="_blank" underline="hover">
              Live Project
            </Link>
          )}
          {repoLink && (
            <Link href={repoLink} target="_blank" underline="hover">
              Repository
            </Link>
          )}
        </Box>

        {/* Supporting Images */}
        {supportingImgs.length > 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
              Screenshots
            </Typography>

            {supportingImgs.map((imgSrc, key) => (
              <CardMedia
                key={key}
                component="img"
                image={imgSrc.src}
                alt={`${shortTitle} screenshot ${key + 1}`}
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Box>
        )}

      </CardContent>
    </Card>
  );
};