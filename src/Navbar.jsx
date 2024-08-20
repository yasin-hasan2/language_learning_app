// import React from 'react';
import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const Navbar = ({ change, check }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(null);
  };
  return (
    <div className="navbar">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "flex", md: "flex" }, gap: "5px" }}
          >
            <LanguageIcon></LanguageIcon>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
          >
            Language Change app
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Feature</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Blog</Button>
            <Switch color="neutral" onChange={change} checked={check} />
            <Button color="inherit">LogIn</Button>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "row-reverse",
            }}
          >
            <IconButton
              onClick={toggleMenu}
              size="large"
              edge="start"
              color="inherit"
            >
              {menuOpen ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
            </IconButton>

            <Menu
              onClose={closeMenu}
              open={Boolean(menuOpen)}
              sx={{
                display: { xs: "flex", md: "none" },
                position: "absolute",
                top: "-10rem",
              }}
            >
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Feature</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Switch color="neutral" onChange={change} checked={check} />
                <MenuItem>LogIn</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}
          >
            Language Change app
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
