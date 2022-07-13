import { Card } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 80,
    paddingBottom: 80,

    [theme.breakpoints.down("md")]: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingTop: 50,
    marginBottom: 40,

    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,
    fontWeight: 600,
    fontSize: 18,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
    textAlign: "center",
  },

  imageWrapper: {
    padding: 10,
    height: "45px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 15,
    },
  },
  imageWrapperDotOracle: {
    padding: 2,
    height: "45px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 5,
    },
  },
  imageWrapperMetis: {
    padding: 2,
    height: "45px",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      padding: 2,
      height: "30px",
      width: "fit-content",
      maxWidth: 70,
    },
  },
  imageWrapperMeland: {
    height: "70px",

    [theme.breakpoints.down("md")]: {
      height: "60px",
      padding: 5,
    },
  },
  imageWrapperUnifarm: {
    padding: 10,
    height: "50px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 10,
    },
  },
  imageWrapperKitsumon: {
    padding: 2,
    height: "55px",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      padding: 2,
      height: "30px",
      width: "100%",
    },
  },
  imageWizarre: {
    padding: 5,
    height: "55px",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      padding: 2,
      height: "40px",
      width: "fit-content",
      maxWidth: 70,
    },
  },
  imageWrapperBMW: {
    height: "48px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 5,
      paddingLeft: 2,
      paddingRight: 2,
    },
  },
  imageWrapper2: {
    padding: 10,
    height: "65px",
    [theme.breakpoints.down("md")]: {
      height: "40px",
      padding: 4,
    },
  },

  listItem: {
    alignSelf: "center",
    justifySelf: "center",
  },
  card: {
    padding: 5,
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 100,
    },
  },
  cardCasper: {
    padding: 5,
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 140,
    },
  },
  cardWrapper: {
    padding: 5,
  },
  logoContainer: {
    borderRadius: 14,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    justifyContent: "center",
  },
  logoWrapper: {
    maxWidth: 900,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  noBgIcon: {
    backgroundColor: "transparent",

    height: "60px",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      padding: 2,
      height: "50px",
      width: "fit-content",
      maxWidth: 70,
    },
  },
}));

const Investor = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>
        Investors and Partners<strong className={classes.highlight}></strong>
      </h6>
      <div className={classes.logoContainer}>
        <div className={classes.logoWrapper}>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://polkabridge.org/">
                  <img
                    src="https://launchpad.polkabridge.org/img/logo-white.png"
                    alt="logo"
                    className={classes.imageWrapper}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="http://chinapolka.com/">
                  <img
                    src="assets/chinapolka.png"
                    alt="logo"
                    className={classes.imageWrapper}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem}>
                  <img
                    src="assets/bmwcapital.png"
                    alt="logo"
                    className={classes.imageWrapperBMW}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://arcadenet.io/">
                  <img
                    src="assets/arcade.png"
                    alt="arcade"
                    className={classes.imageWizarre}
                  />
                </a>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://casperlabs.io/">
                  <img
                    src="assets/casper.png"
                    alt="logo"
                    className={classes.imageWrapper}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://www.metis.io/">
                  <img
                    src="assets/metis.png"
                    alt="logo"
                    className={classes.imageWrapperUnifarm}
                  />
                </a>
              </div>
            </div>
            <div
              className="col-6 col-md-3 mb-4 d-flex justify-content-center  align-items-center"
              align="center"
            >
              <div>
                <a className={classes.listItem} href="https://www.fabwelt.com/">
                  <img
                    src="assets/fabwelt.webp"
                    alt="dogeon"
                    className={classes.imageWrapperUnifarm}
                  />
                </a>
              </div>
            </div>
            <div
              className="col-6 col-md-3 mb-4 d-flex justify-content-center align-items-center"
              align="center"
            >
              <div>
                <a className={classes.listItem} href="https://gamesol.io/">
                  <img
                    src="assets/gamesol.gif"
                    alt="dogeon"
                    className={classes.imageWrapperUnifarm}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a
                  className={classes.listItem}
                  href="https://www.dragonlandgame.com/"
                >
                  <img
                    src="assets/Doragonland.png"
                    alt="logo"
                    className={classes.imageWrapperMeland}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://www.meland.ai/">
                  <img
                    src="assets/meland.png"
                    alt="logo"
                    className={classes.imageWrapperMeland}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a
                  className={classes.listItem}
                  href="https://metachess.network/"
                >
                  <img
                    src="/assets/metachess.png"
                    alt="metachess"
                    className={classes.imageWizarre}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://www.dogeon.io/">
                  <img
                    src="assets/dogeon.png"
                    alt="dogeon"
                    className={classes.imageWizarre}
                  />
                </a>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://wizarre.io/">
                  <img
                    src="assets/wizarre.png"
                    alt="logo"
                    className={classes.imageWrapperMetis}
                  />
                </a>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://souni.io/">
                  <img
                    src="assets/souni.png"
                    alt="logo"
                    style={{ padding: 0 }}
                    className={classes.imageWizarre}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://kitsumon.com/">
                  <img
                    src="assets/kitsumon.png"
                    alt="logo"
                    style={{ padding: 7 }}
                    className={classes.imageWrapperMetis}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://unifarm.co/">
                  <img
                    src="assets/unifarm.png"
                    alt="logo"
                    className={classes.imageWrapperUnifarm}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://blockombat.com/">
                  <img
                    src="assets/BlocKombat.jpeg"
                    alt="BlocKombat"
                    style={{
                      backgroundColor: "transparent",
                      borderRadius: "50%",
                    }}
                    className={classes.noBgIcon}
                  />
                </a>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://rikkei.finance/">
                  <img
                    src="assets/rigi.png"
                    alt="dogeon"
                    style={{
                      backgroundColor: "transparent",
                      borderRadius: "50%",
                    }}
                    className={classes.noBgIcon}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div
                style={{ backgroundColor: "transparent", borderRadius: "50%" }}
              >
                <a
                  className={classes.listItem}
                  href="https://conquestlegends.com/"
                >
                  <img
                    src="assets/conquest.jpeg"
                    alt="dogeon"
                    style={{
                      backgroundColor: "transparent",
                      borderRadius: "50%",
                    }}
                    className={classes.noBgIcon}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://roseon.finance/">
                  <img
                    src="assets/roseon.png"
                    alt="logo"
                    className={classes.imageWrapperDotOracle}
                  />
                </a>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-4" align="center">
              <div href="https://yellowroad.app/">
                <a className={classes.listItem}>
                  <img
                    src="https://yellow-road.web.app/static/media/mobile-logo.dc85cbf8.svg"
                    alt="logo"
                    className={classes.imageWrapper}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a
                  className={classes.listItem}
                  href="https://www.daostarter.pro"
                >
                  <img
                    src="assets/daostarter.png"
                    alt="logo"
                    className={classes.imageWrapperMetis}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://duckstarter.io">
                  <img
                    src="assets/DuckStarter.svg"
                    alt="logo"
                    className={classes.imageWrapper}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a
                  className={classes.listItem}
                  href="https://dotoracle.network/"
                >
                  <img
                    src="assets/dotoracle.png"
                    alt="logo"
                    className={classes.imageWrapperDotOracle}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://quiverx.io/">
                  <img
                    src="https://assets.website-files.com/61e184149387a6f17febbb02/622cdc8ffdfd913a4470205a_logo.svg"
                    alt="logo"
                    className={classes.imageWrapperDotOracle}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a
                  className={classes.listItem}
                  href="https://oddiyana.ventures"
                >
                  <img
                    src="assets/oddiyana.png"
                    alt="logo"
                    className={classes.imageWrapperUnifarm}
                    style={{ padding: 0 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
