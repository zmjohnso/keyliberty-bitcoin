import { Box, Typography } from "@mui/material";
import { InlineWidget } from "react-calendly";

export const Contact: React.FC = () => {
  return (
    <Box marginTop="1rem" marginBottom="1rem">
      <Typography variant="h2" align="center" gutterBottom>
        Contact
      </Typography>
      <Typography variant="h4" align="center">
        Schedule a meeting with me below!
      </Typography>
      <InlineWidget url="https://calendly.com/zachary-business/30min" />
    </Box>
  );
};
