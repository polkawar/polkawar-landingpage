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
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background: `linear-gradient(to bottom right,#c91f61,
        #f8f8f8,
        #f8f8f8,
        #f8f8f8)`,
    [theme.breakpoints.down("sm")]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: "flex",
      justifyContent: "flex-start",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      marginBottom: 45,
    },
  },
  listText: {
    color: theme.palette.pbr.textSecondary,
    fontSize: 24,
    fontWeight: 400,
    verticalAlign: "middle",
    wordSpacing: "0px",
    alignSelf: "center",
    paddingTop: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      marginRight: 30,
    },
  },
  image: {
    width: 500,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      width: 270,
      height: 270,
    },
  },
  itemsContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      // display: "flex",
      flexDirection: "column",
      //   flexWrap: "wrap",
    },
  },
  listItems: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
  listItem: {
    marginBottom: 30,
    listStyle: "none",
  },
}));

const Token = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Token Use Cases</h6>

      <div className={classes.itemsContainer}>

        <CardMedia className={classes.image} image={use_case} />
      </div>
    </div>
  );
};

export default Token;
