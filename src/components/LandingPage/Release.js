import { CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import release from "../../assets/release_schedule.png";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(to bottom right,#6a00dc,
      #f8f8f8,
      #f8f8f8,
      #f8f8f8)`,

    [theme.breakpoints.down("md")]: {
      minHeight: "80vh",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    // textAlign: "left",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    alignSelf: "center",
    paddingTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: 36,
      marginBottom: 140,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      marginBottom: 100,
    },
  },

  image: {
    width: "80%",
    height: 600,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 450,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 230,
    },
  },
}));

const Release = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Token release schedule</h6>
      <CardMedia className={classes.image} image={release} />
    </div>
  );
};

export default Release;
