import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import use_case from "../../assets/usecase.png";

import AccountBalanceOutlined from "@material-ui/icons/AccountBalanceOutlined";
import LocalFloristOutlined from "@material-ui/icons/LocalFloristOutlined";
import SendOutlined from "@material-ui/icons/SendOutlined";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    background: `linear-gradient(to bottom right,#c91f61,
        #f8f8f8,
        #f8f8f8,
        #f8f8f8)`,
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
      // fontSize: 28,
      marginTop: 50,
      marginBottom: 50,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      marginBottom: 45,
    },
  },

  image: {
    height: 550,
    width: 500,
    [theme.breakpoints.down("md")]: {
      width: 700,
      height: 700,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      height: 350,
    },
  },
}));

const Token = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Token Use Cases</h6>

      <CardMedia className={classes.image} image={use_case} />
    </div>
  );
};

export default Token;
