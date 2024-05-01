import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";

const modalStyles = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "80%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Services: React.FC = () => {
  const [openStandardModal, setOpenStandardModal] = useState(false);
  const handleOpenStandardModal = () => setOpenStandardModal(true);
  const handleCloseStandardModal = () => setOpenStandardModal(false);
  const [openAdvancedModal, setOpenAdvancedModal] = useState(false);
  const handleOpenAdvancedModal = () => setOpenAdvancedModal(true);
  const handleCloseAdvancedModal = () => setOpenAdvancedModal(false);

  return (
    <Box alignContent="center" margin={{ xs: "1rem", md: "5rem" }}>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 500,
            minHeight: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography variant="h3" component="div" gutterBottom>
              Standard
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Learn the basics to securely send, recive and store Bitcoin.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOpenStandardModal}>
              Learn More
            </Button>
            <Modal open={openStandardModal} onClose={handleCloseStandardModal}>
              <Box sx={modalStyles}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Typography variant="h6" component="h2">
                    Standard Package
                  </Typography>
                  <IconButton
                    aria-label="close Standard package modal"
                    onClick={handleCloseStandardModal}
                  >
                    <CloseIcon />
                  </IconButton>
                </Stack>
                <Typography variant="body1" component="body">
                  This package includes the following services:
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="Guidance purchasing your first hardware wallet."></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="How to safely store your seedphrase."></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="Learn how to buy Bitcoin."></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="Learn how to send and recieve Bitcoin with your new cold storage hardware wallet."></ListItemText>
                    </ListItem>
                  </List>
                  <Link to="/contact">Schedule a free call.</Link>
                </Typography>
              </Box>
            </Modal>
          </CardActions>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 500,
            minHeight: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography variant="h3" component="div" gutterBottom>
              Advanced
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Learn more robust methods to store your bitcoin as well as how to
              increase your own privacy and support the continued functioning of
              the Bitcoin network.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOpenAdvancedModal}>
              Learn More
            </Button>
            <Modal open={openAdvancedModal} onClose={handleCloseAdvancedModal}>
              <Box sx={modalStyles}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Typography variant="h6" component="h2">
                    Advanced Package
                  </Typography>
                  <IconButton
                    aria-label="close advanced package modal"
                    onClick={handleCloseAdvancedModal}
                  >
                    <CloseIcon />
                  </IconButton>
                </Stack>
                <Typography variant="body1" component="body">
                  This package includes everything in the Standard package plus
                  the following services:
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="Advanced hardware wallet options consulting."></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Advanced seedprhase storage setup."
                        secondary="Seed XOR and Shamir backup options."
                      ></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="How to run your own node and connect it to your hardware wallet software."
                        secondary="Contribute to the security of the Bitcoin network while increasing your privacy."
                      ></ListItemText>
                    </ListItem>
                  </List>
                  <Link to="/contact">Schedule a free call.</Link>
                </Typography>
              </Box>
            </Modal>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
};
