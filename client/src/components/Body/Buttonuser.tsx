import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../image/logo.png";
import { Link as NewLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';

const settings = ["Profile", "Logout"];

const getUserData = () => {
  const stringfiedUser = localStorage.getItem("user") || "";
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const ButtonUser = () => {
  const userData = getUserData();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (!userData) {
    return (
      <div>
        <button
          style={{
            color: "var(--dl-color-gray-black)", //login
            width: "170px",
            height: "50px",
            position: "relative",
            boxShadow: "5px 5px 10px 0px #7c7c7c",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          <NewLink href="../login">
            <h1
              style={{
                top: "6px",
                left: "0px",
                color: "rgb(53, 58, 104)",
                right: "0px",
                width: "auto",
                bottom: "0px",
                height: "38px",
                margin: "auto",
                position: "absolute",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontWeight: "700",
                }}
              >
                Login
              </span>
              <br></br>
            </h1>
          </NewLink>
        </button>
      </div>
    );
  }

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
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
              {settings.map((setting) => (
                <Link
                  to={setting === "Logout" ? "/login" : "/profile"}
                  key={setting}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <b>
            {userData && <div style={{ fontSize: '16px' }}> {userData.username}</div>}
            </b>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonUser;
