import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2b3630" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
          >
            Kevin Nguyen
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "right",
            }}
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
