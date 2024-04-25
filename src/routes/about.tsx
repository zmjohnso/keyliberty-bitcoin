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
      "noopener noreferrer"
    );
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/zachary-m-johnson/",
      "_blank",
      "noopener noreferrer"
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
      <Card sx={{ maxWidth: 500 }}>
        <CardHeader
          title="Zachary M Johnson"
          subheader="Software Consultant and Developer"
        />
        <CardMedia
          component="img"
          height="194"
          image="/assets/icon.svg"
          alt="Paella dish"
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
            In November 2019 I began my Bitcoin journey at TABConf, where my
            hackathon team took first place working on a real-time payment
            system for freelance developers via the Lightning Network. Ever
            since, I have been continuing my Bitcoin education, helping others
            learn purchase and self-custody Bitcoin, and contributing to
            open-source projects, such as{" "}
            <Link
              href="https://github.com/joinmarket-webui/jam"
              target="_blank"
              rel="noreferrer"
              underline="always"
            >
              Jam
            </Link>
            .
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="link to github" onClick={handleGithubClick}>
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="LinkedIn" onClick={handleLinkedInClick}>
            <LinkedInIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
