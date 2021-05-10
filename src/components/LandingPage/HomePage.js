import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingLeft: 100,
    height: "100vh",
    // paddingTop: 250,
    color: "white",
    // marginTop: 60,
    paddingTop: 220,
    marginTop: 60,
    textShadow: "3px 4px black",
  },
  heading: {
    textAlign: "left",
    fontSize: 44,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    fontFamily: "'New Rocker', cursive",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
      marginTop: 10,
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
