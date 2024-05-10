import { Box, Typography } from "@mui/material";
import { InlineWidget } from "react-calendly";

export const Contact: React.FC = () => {
  return (
    <Box marginTop="1rem" marginBottom="1rem">
      <Typography variant="h2" align="center" gutterBottom>
        Contact
      </Typography>
      <Typography variant="h4" align="center">
        Schedule a free meeting with me below!
      </Typography>
      <Box border="solid" margin="1rem">
        <InlineWidget url="https://calendly.com/keylibertybitcoin/30min" />
      </Box>
    </Box>
  );
};
