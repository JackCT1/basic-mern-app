import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
import memories from "./images/memories.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          The Jack Thomas App
        </Typography>
        <img src={memories} alt="Logo" height="300" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify-content="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
