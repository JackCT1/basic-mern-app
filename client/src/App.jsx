import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          The Jack Thomas App
        </Typography>
        <img src={} alt="Logo" height="60"/>
      </AppBar>
    </Container>
  );
};

export default App;
