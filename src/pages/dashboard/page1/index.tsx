import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {},
  container: {
    color: "#1C2535",
    backgroundColor: "white",
  },
});

const Page1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <div>Dashboard Page 1</div>
      </Container>
    </div>
  );
};

export default Page1;
