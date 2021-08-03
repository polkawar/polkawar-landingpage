import { CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 40,
    height: "100%",

    [theme.breakpoints.down("md")]: {
      padding: 10,
      paddingBottom: 35,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    textAlign: "center",
    paddingTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      marginBottom: 50,
    },
  },

  image: {
    width: 950,
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "95%",
      height: "auto",
    },
  },
}));

const Release = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div>
        {" "}
        <h6 className={classes.heading}>Token release schedule</h6>
      </div>
      <div className="text-center">
        <img
          className={classes.image}
          src="images/tokenomics_new.png"
          alt="release schedule"
        />
      </div>
    </div>
  );
};

export default Release;
