import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import tokenomics_back from "../../assets/tokenomics_back.png";

import AccountBalanceOutlined from "@material-ui/icons/AccountBalanceOutlined";
import LocalFloristOutlined from "@material-ui/icons/LocalFloristOutlined";
import SendOutlined from "@material-ui/icons/SendOutlined";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    minHeight: "100vh",
    display: "flex",
    // flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    background: `linear-gradient(to bottom right,#6a00dc,
        #f8f8f8,
        #f8f8f8,
        #f8f8f8)`,
    [theme.breakpoints.down("md")]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "flex-end",
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    // textAlign: "left",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    // alignSelf: "center",
    paddingTop: 0,
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
      marginBottom: 45,
      alignSelf: "center",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "start",
    // alignItems: "center",
    marginRight: 60,
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      // alignItems: "center",
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
      // marginRight: 30,
    },
  },
  image: {
    width: 830,
    height: 500,
    [theme.breakpoints.down("md")]: {
      marginTop: 50,
    },
    [theme.breakpoints.down("sm")]: {
      width: 380,
      height: 230,
      marginTop: 10,
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
    // [theme.breakpoints.down("sm")]: {
    //   display: "flex",
    //   flexWrap: "wrap",
    // },
  },
  listItem: {
    marginBottom: 10,
    // listStyle: "none",
  },
}));

const Tokenomics = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <CardMedia className={classes.image} image={tokenomics_back} />

      <div className={classes.textContainer}>
        <h6 className={classes.heading}>Tokenomics & Locking</h6>

        <h5>Unlock Schedule</h5>
        <ul className={classes.listItems}>
          <li className={classes.listItem}>
            <p>
              <strong style={{ marginRight: 5 }}>Advisor & Strategic </strong>
              5% TGE, 15% Month 2, 10% Month 3 to 10
            </p>
          </li>
          <li className={classes.listItem}>
            <p>
              <strong style={{ marginRight: 5 }}>Private Sale</strong> 10% TGE,
              10% for 9 months
            </p>
          </li>
          <li className={classes.listItem}>
            <p>
              <strong style={{ marginRight: 5 }}>Foundation</strong> 20% every 6
              month
            </p>
          </li>
          <li className={classes.listItem}>
            <p>
              <strong style={{ marginRight: 5 }}>Marketing</strong> 5% vesting
              for 20 months
            </p>
          </li>
          <li className={classes.listItem}>
            <p>
              <strong style={{ marginRight: 5 }}>
                In game mining & Platform staking
              </strong>{" "}
              5% vesting for 20 months
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tokenomics;
