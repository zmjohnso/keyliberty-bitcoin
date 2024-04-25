import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      paddingLeft="1rem"
      paddingRight="1rem"
      paddingTop="1rem"
      alignItems="center"
    >
      <CardMedia
        component="img"
        sx={{ width: { xs: 350, md: 450 } }}
        image="/src/assets/logo_horizontal.png"
        alt="KeyLiberty Bitcoin Logo"
      />
      <Typography variant="h4" component="h4" color="black" gutterBottom>
        Learn how to safely store your Bitcoin and experince true financial
        freedom.
      </Typography>
      <Typography variant="h6" component="h6" color="black">
        Get started by viewing the available{" "}
        <Link to="/services">service packages</Link>{" "}
        or <Link to="/contact">schedule a free meeting with me.</Link>
      </Typography>
    </Box>
  );
};
