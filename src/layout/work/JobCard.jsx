import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";

import { ExpandableCard } from "../../components/ExpandableCard";

export const JobCard = ({ job }) => {
  const {
    title,
    companyData,
    startDate,
    endDate,
    contributions,
    outcomes,
    technologies,
  } = job;

  return (
    <ExpandableCard initialHeight="18rem">
      <CardContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mb: 1,
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary">
            {startDate} – {endDate}
          </Typography>

          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>

          {companyData.link ? (
            <Link href={companyData.link} target="_blank" underline="hover" color="primary">
              {companyData.name}
            </Link>
          ) : (
            <Typography variant="body1" color="text.secondary">
              {companyData.name}
            </Typography>
          )}

          {companyData.address && (
            <Typography variant="body2" color="text.secondary">
              {companyData.address}
            </Typography>
          )}

          {(companyData.contacts?.email || companyData.contacts?.phone) && (
            <Typography component="div" variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {companyData.contacts.email && (
                <Typography component="div" variant="body2">
                  Email: {companyData.contacts.email}
                </Typography>
              )}

              {companyData.contacts.phone && (
                <Typography component="div" variant="body2">
                  Phone: {companyData.contacts.phone}
                </Typography>
              )}
            </Typography>
          )}
        </Box>

        {companyData.description && (
          <Box>
            <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
              About {companyData.shortName}
            </Typography>
            <Typography variant="body2">{companyData.description}</Typography>
          </Box>
        )}

        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
            My Contributions
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
            {contributions.map((item, key) => (
              <Box key={key} sx={{ display: "flex", gap: 1 }}>
                <Typography color="text.secondary">•</Typography>
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="text.secondary">
            Outcomes
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
            {outcomes.map((item, key) => (
              <Box key={key} sx={{ display: "flex", gap: 1 }}>
                <Typography color="text.secondary">•</Typography>
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {technologies.map((tech, key) => (
            <Chip key={key} label={tech} variant="outlined" />
          ))}
        </Box>
      </CardContent>
    </ExpandableCard>
  );
};