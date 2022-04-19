import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2b3630" }} id="navBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              margin: { xs: "0px" },
              justifyContent: "left",
            }}
            className="linkTabs"
          >
            <Button
              key="skills"
              onClick="{handleCloseNavMenu}"
              sx={{ my: 2, color: "white", display: "block" }}
              href="#about-section"
            >
              My Skills
            </Button>
            <Button
              key="Projects"
              onClick="{handleCloseNavMenu}"
              sx={{ my: 2, color: "white", display: "block" }}
              href="#projects-section"
            >
              Projects
            </Button>
            <Button
              key="Contact"
              onClick="{handleCloseNavMenu}"
              sx={{ my: 2, color: "white", display: "block" }}
              href="#contact-section"
            >
              Contact Me
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
