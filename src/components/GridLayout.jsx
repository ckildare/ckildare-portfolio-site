import Box from "@mui/material/Box";

export const GridLayout = ({
  children,
  gap = 2,
  columns = { xs: 1, sm: 2, md: 3 },
  ...props
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: `repeat(${columns.xs}, 1fr)`,
          sm: `repeat(${columns.sm}, 1fr)`,
          md: `repeat(${columns.md}, 1fr)`,
        },
        gap,
        alignItems: "start",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};