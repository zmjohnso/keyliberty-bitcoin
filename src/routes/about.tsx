import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const About: React.FC = () => {
  const handleGithubClick = () => {
    window.open(
      "https://github.com/zmjohnso/",
      "_blank",
      "noopener noreferrer",
    );
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/zachary-m-johnson/",
      "_blank",
      "noopener noreferrer",
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="1rem"
      marginBottom="1rem"
    >
      <Typography variant="h2" align="center" gutterBottom>
        About
      </Typography>
      <Card
        sx={{
          maxWidth: 600,
          margin: "1rem",
          background: "#e1f6fe",
        }}
      >
        <CardHeader
          title="Zachary M. Johnson"
          subheader="Software Consultant and Developer"
        />
        <CardMedia
          component="img"
          height="450"
          image="/assets/profile.png"
          alt="Zachary Johnson Profile Photo"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            I launched my professional career in February, 2021 at the software
            consultancy Atomic Object. While at Atomic I worked on multiple
            projects with a variety of tech stacks, including React/Node and
            Angular/.NET Core. During that time, I also wrote for the Atomic
            Object blog, known as{" "}
            <Link
              href="https://spin.atomicobject.com/author/zach-johnson/"
              target="_blank"
              rel="noreferrer"
              underline="always"
            >
              Spin
            </Link>
            .
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            In November of 2021 I began my Bitcoin journey at TABConf, where my
            hackathon team took first place working on a real-time payment
            system for freelance developers via the Lightning Network. I have
            since continued my Bitcoin education, helping others learn how to
            purchase and self-custody Bitcoin, and contributing to open-source
            projects.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="link to personal github account"
            onClick={handleGithubClick}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="link to personal LinkedIn"
            onClick={handleLinkedInClick}
          >
            <LinkedInIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
