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
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

  interface NavLinkItemProps {
    location: string;
    title: string;
  }

  const NavLinkItem: React.FC<NavLinkItemProps> = (props) => (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? theme.palette.primary.contrastText : "inherit",
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
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                alt="KeyLiberty Bitcoin Logo"
                src="src/assets/logo_horizontal.png"
                height={75}
                width={75}
                onClick={handleHomeNavigation}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
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
                    <NavLinkItem title={page[0]} location={page[1]} />
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                alt="KeyLiberty Bitcoin Logo"
                src="src/assets/logo_horizontal.png"
                height={75}
                width={75}
                onClick={handleHomeNavigation}
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {Array.from(pages.entries()).map((page) => (
                <MenuItem
                  key={page[0]}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLinkItem title={page[0]} location={page[1]} />
                </MenuItem>
              ))}
            </Box>
            <Box>
              <IconButton color="inherit" onClick={handleLinkedInClick}>
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" onClick={handleGithubClick}>
                <GitHubIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Box>
  );
};
