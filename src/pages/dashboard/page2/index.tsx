import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {},
  container: {
    color: "#1C2535",
    backgroundColor: "white",
  },
});

const Page2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <div>Dashboard page 2</div>
      </Container>
    </div>
  );
};

export default Page2;
