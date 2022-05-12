import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { COLORS } from "../Values/Colors";
import "./topbar.module.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

// const pages = ["About Me", "Tech Stack", "Achievements", "Projects", "Contact"];
const pages = [""];

const settings = [
  // { setting: "Profile", link: "/Profile" },
  { setting: "Explore", link: "/" },
  { setting: "Add Project", link: "/AddProject" },
  // { setting: "Add Achievement", link: "/AddHonor" },
  // { setting: "Add Tech", link: "/AddTechIcon" },
  { setting: "Settings", link: "/AddProfile" },
  { setting: "Logout", link: "/" },
];
const settings2 = [
  { setting: "Login", link: "/Login" },
  { setting: "Register", link: "/Register" },
];

const Topbar = () => {
  const PF = "http://localhost:9898/images/";

  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      style={{ backgroundColor: COLORS.primary1 }}
      sx={{
        bgcolor: "transparent",
        boxShadow: "-moz-initial",
      }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: "bold",
            }}
          >
            {!user ? "Project Hub" : user.firstName + " " + user.lastName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {!user ? "Project Hub" : user.firstName + " " + user.lastName}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                  m: "5px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar src={PF + user.profilePic} />
                ) : (
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((s, index) => {
                if (s.setting === "Logout") {
                  if (!user) {
                    return;
                  }
                  return (
                    <MenuItem key={index} onClick={handleLogout}>
                      <Typography textAlign="center">{s.setting}</Typography>
                    </MenuItem>
                  );
                } else {
                  return (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Link
                        to={s.link}
                        style={{
                          textDecoration: "none",
                          color: COLORS.primary1,
                        }}
                      >
                        <Typography textAlign="center">{s.setting}</Typography>
                      </Link>
                    </MenuItem>
                  );
                }
              })}
              {settings2.map((s, index) => {
                if (!user && "Login") {
                  return (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Link
                        to={s.link}
                        style={{
                          textDecoration: "none",
                          color: COLORS.primary1,
                        }}
                      >
                        <Typography textAlign="center">{s.setting}</Typography>
                      </Link>
                    </MenuItem>
                  );
                }
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Topbar;
