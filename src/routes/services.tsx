import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { Link } from "react-router-dom";

const modalStyles = {
  position: "absolute" as "absolute",
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
  const [openBeginnerModal, setOpenBeginnerModal] = useState(false);
  const handleOpenBeginnerModal = () => setOpenBeginnerModal(true);
  const handleCloseBeginnerModal = () => setOpenBeginnerModal(false);
  const [openAdvancedModal, setOpenAdvancedModal] = useState(false);
  const handleOpenAdvancedModal = () => setOpenAdvancedModal(true);
  const handleCloseAdvancedModal = () => setOpenAdvancedModal(false);

  return (
    <Box alignContent="center" margin={{ xs: "1rem", md: "5rem" }}>
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ minWidth: 275, maxWidth: 400, height: 250 }}>
          <CardContent>
            <Typography variant="h3" component="div" gutterBottom>
              Beginner
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Perfect for those individuals who are less tech savy, but want to
              learn how to safely store and own their own Bitcoin.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOpenBeginnerModal}>
              Learn More
            </Button>
            <Modal open={openBeginnerModal} onClose={handleCloseBeginnerModal}>
              <Box sx={modalStyles}>
                <Typography variant="h6" component="h2">
                  Beginner Package
                </Typography>
                <Typography variant="body1" component="body">
                  This package includes the following services:
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Getting setup with a Bitcoin cold storage hardware wallet."
                        secondary="As well as how to safely store your seedphrase!"
                      ></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="How to buy Bitcoin."></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="How to send Bitcoin to your hardware wallet after purchasing it."></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="Lifetime call support for any questions you may have about your Bitcoin storage!"></ListItemText>
                    </ListItem>
                  </List>
                  <Link to="/contact">Schedule a call.</Link>
                </Typography>
              </Box>
            </Modal>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, maxWidth: 400, height: 250 }}>
          <CardContent>
            <Typography variant="h3" component="div" gutterBottom>
              Advanced
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Great for those who already understand the basics of Bitcoin but
              want to learn about more advanced custody models and security, and
              how to contribute to the Bitcoin network through running a node.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleOpenAdvancedModal}>
              Learn More
            </Button>
            <Modal open={openAdvancedModal} onClose={handleCloseAdvancedModal}>
              <Box sx={modalStyles}>
                <Typography variant="h6" component="h2">
                  Advanced Package
                </Typography>
                <Typography variant="body1" component="body">
                  This package includes everything in the Beginner package plus
                  the following services:
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="Advanced Bitcoin wallet hardware setup and backup methods."></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="How to run your own Bitcoin node."
                        secondary="And how to connect that node to your hardware wallet software."
                      ></ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText primary="Lifetime call support for any questions you may have about your Bitcoin storage!"></ListItemText>
                    </ListItem>
                  </List>
                  <Link to="/contact">Schedule a call.</Link>
                </Typography>
              </Box>
            </Modal>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
};
