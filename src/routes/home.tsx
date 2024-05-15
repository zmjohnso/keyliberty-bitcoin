import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
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
        image="/assets/logo.png"
        alt="KeyLiberty Bitcoin Logo"
      />
      <Typography
        align="center"
        variant="h4"
        component="h4"
        color="black"
        gutterBottom
      >
        Learn how to safely store your Bitcoin and experince true financial
        freedom.
      </Typography>
      <Typography
        paddingTop="2rem"
        align="center"
        variant="h6"
        component="h6"
        color="black"
        gutterBottom
      >
        Get started by viewing the available{" "}
        <Link to="/services">service packages</Link> or{" "}
        <Link to="/contact">scheduling a free meeting.</Link>
      </Typography>
      <Divider variant="middle" />
      <Box padding={{ xs: "1rem", md: "5rem" }}>
        <Card variant="elevation">
          <CardContent>
            <Typography
              align="center"
              variant="h4"
              component="h4"
              color="black"
              gutterBottom
            >
              Why Bother with Self-Custody?
            </Typography>
            <Typography
              align="center"
              variant="body1"
              component="body"
              color="black"
              gutterBottom
            >
              When I first began my Bitcoin journey, I did not take seriously
              the concept of self-custody. I owned a hardware wallet, but viewed
              it as similar to having cash in my wallet, while my BTC on
              third-party platforms was stored "in a bank." Therefore, I stored
              a significant portion of my BTC holdings on platforms like FTX US
              and Celsius. My initial fiat-based understanding could not have
              been more wrong.
            </Typography>
            <Typography
              align="center"
              variant="body1"
              component="body"
              color="black"
              gutterBottom
            >
              During my early days in Bitcoin, I was constantly reading and
              learning. After reading the Bitcoin Standard and watching many
              Bitcoin YouTubers talking about the risks of third-party Bitcoin
              custodians where you do not own your own keys, I finally began to
              understand another of the fundamental strengths of Bitcoin. Not
              only is it inflation resistant with a capped supply, but when you
              own your own keys, you can transact at anytime, with anyone you
              choose. This is true financial freedom.
            </Typography>
            <Typography
              align="center"
              variant="body1"
              component="body"
              color="black"
              gutterBottom
            >
              Fortunately, after realizing my mistake, I was able to withdraw
              all my BTC from FTX and Celsius months before they went under.
              Many people lost access to their Bitcoin when these companies were
              exposed as ponzies. They learnt the lesson of "not your keys, not
              your coins", the hard way. However, many people are still making
              the same mistake today; maybe now even more than ever, with the
              introduction of Bitcoin ETFs in the U.S. and elsewhere. I hope to
              help illuminate the vital importance of self-custody to ensure
              that people can retain full financial freedom through Bitcoin, in
              a safe and secure fashion.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
