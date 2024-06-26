import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  CardMedia,
} from "@mui/material";
import XIcon from "@mui/icons-material/X";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const pages = new Map<string, string>([
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
]);

export const Root: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHomeNavigation = () => {
    navigate("/");
  };

  const handleXClick = () => {
    window.open(
      "https://twitter.com/KeyLibertyBTC",
      "_blank",
      "noopener noreferrer",
    );
  };

  interface NavLinkItemProps {
    location: string;
    title: string;
    color: string;
  }

  const NavLinkItem: React.FC<NavLinkItemProps> = (props) => (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? props.color : "inherit",
          textDecoration: "none",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 500,
        };
      }}
      to={props.location}
      onClick={handleCloseNavMenu}
    >
      {props.title}
    </NavLink>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: { xs: "space-between", md: "center" } }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <CardMedia
                component="img"
                height={75}
                width={75}
                image="/assets/logo.png"
                alt="KeyLiberty Bitcoin Logo"
                onClick={handleHomeNavigation}
              />
            </Typography>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {Array.from(pages.entries()).map((page) => (
                  <MenuItem key={page[0]}>
                    <NavLinkItem
                      title={page[0]}
                      location={page[1]}
                      color={theme.palette.primary.main}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <CardMedia
                component="img"
                height={75}
                width={75}
                image="/assets/logo.png"
                alt="KeyLiberty Bitcoin Logo"
                onClick={handleHomeNavigation}
              />
            </Typography>
            <Box
              justifyContent="space-evenly"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {Array.from(pages.entries()).map((page) => (
                <MenuItem
                  key={page[0]}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLinkItem
                    title={page[0]}
                    location={page[1]}
                    color={theme.palette.text.primary}
                  />
                </MenuItem>
              ))}
            </Box>
            <Box>
              <IconButton color="inherit" onClick={handleXClick}>
                <XIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Box>
  );
};
