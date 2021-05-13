import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "white",
    marginTop: 60,
    textShadow: "3px 4px black",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  heading: {
    textAlign: "center",
    fontSize: 44,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    fontFamily: "'New Rocker', cursive",
    marginTop: 30,
    paddingTop: 250,
    [theme.breakpoints.down("md")]: {
      marginTop: 180,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
      marginTop: 10,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      marginTop: 0,
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.background}>
        <Typography variant="h3" className={classes.heading}>
          Innovative DeFi and NFT Gaming Platform
        </Typography>
      </div>
    </>
  );
};

export default HomePage;
