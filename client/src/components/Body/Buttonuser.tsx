import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

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
        <Link to='../login'>
          <Button sx={{
              width: '150px',
              height: '10%',                 //Login
              background: '#ffffff',
              '&:hover': {
                background: '#ffffff',
                opacity: [0.9, 0.8, 0.7]
              },
              fontSize: '1.2rem',
              fontWeight: '700',
              borderRadius: 3,
              margin: '10px 0px 10px 0px'
            }}>Login</Button>
        </Link>
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
