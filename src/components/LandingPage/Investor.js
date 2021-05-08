import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 35,
    },
  },

  para: {
    fontWeight: 600,
    fontSize: 18,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
    textAlign: "center",
  },
  imageWrapper: {
    padding: 20,
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  imageWrapperBMW: {
    padding: 10,
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      height: "54px",
      padding: 15,
    },
  },
  listingsWrapper: {
    display: "flex",
    alignItems: "center",
  },
}));

const Investor = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <p className={classes.para}>Investors and Partners</p>
      <div className={classes.listingsWrapper}>
        <a href="https://polkabridge.org/">
          <img
            src="assets/polkabridge.png"
            alt="logo"
            className={classes.imageWrapper}
          />
        </a>

        <a href="http://chinapolka.com/">
          <img
            src="assets/chinapolka.png"
            alt="logo"
            className={classes.imageWrapper}
          />
        </a>

        <a>
          <img
            src="assets/bmwcapital.png"
            alt="logo"
            className={classes.imageWrapperBMW}
          />
        </a>
      </div>
    </div>
  );
};

export default Investor;