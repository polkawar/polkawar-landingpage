import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import war3 from "../../assets/pwr.png";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    minHeight: "100vh",
    // height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    background: `linear-gradient(to bottom right,#c91f61,
      #f8f8f8,
      #f8f8f8,
      #f8f8f8)`,
    [theme.breakpoints.down("md")]: {
      padding: 10,
      // paddingBottom: 35,
      // paddingTop: 35,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      // paddingBottom: 35,
      // paddingTop: 35,
      justifyContent: "center",
      alignItems: "start",
      marginBottom: 20,
    },
  },
  image: {
    width: 600,
    height: 400,
    // boxShadow: "0 0 4px #c91f61",
    marginTop: 50,
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      // width: 500,
      // height: 500,
      marginTop: 50,
      marginBottom: 30,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      height: 225,
      marginTop: 60,
      marginBottom: 20,
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    maxWidth: 650,
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.down("md")]: {
      marginTop: 35,
    },
  },
  subHeading: {
    // fontFamily: "'New Rocker', cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      marginTop: 10,
    },
  },
  para: {
    fontWeight: 385,
    verticalAlign: "baseline",
    margin: 0,
    letterSpacing: ".8px",
    paddingTop: 6,
    paddingBottom: 10,
    textAlign: "left",
    lineHeight: 1.75,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      marginTop: 10,
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <CardMedia className={classes.image} image={war3} />

      <div className={classes.textContainer}>
        <h5 className={classes.subHeading}>
          The Decentralized Fighting Game Platform
        </h5>
        <p component="p" className={classes.para}>
          PolkaWar is a blockchain based NFT gaming platform and marketplace.
          <br />
          Inspired by the recent crypto NFT and gaming narratives, PolkaWar will
          combine and synergize them both to build an attractive platform.
          <br />
          The game allows every player to build a character and participate in
          battle against other players.
          <br />
          Further, PolkaWar will also include an NFT marketplace, where players
          can sell their items, weapons and upgraded equipment for crypto. Some
          of the items can even be redeemed for real world replicas.
        </p>
      </div>
    </div>
  );
};

export default About;
