import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      color="secondary"
      style={{ top: "auto", bottom: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}></Box>

          <Typography
            variant="caption"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "Times-new-roman",

              color: "inherit",
              textDecoration: "none",
            }}
          >
            © April 2023 AbunJing Forger. All Rights Reserved.
          </Typography>
          {/* PC */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
