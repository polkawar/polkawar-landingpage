import makeStyles from "@material-ui/core/styles/makeStyles";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import warrior from "../../assets/warrior.png";
import magician from "../../assets/magician.png";
import archers from "../../assets/archer.png";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: `linear-gradient(to bottom right,#6a00dc,
      #f8f8f8,
      #f8f8f8,
      #f8f8f8)`,
    [theme.breakpoints.down("sm")]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: "flex",
      justifyContent: "center",
    },
  },
  image: {
    width: 300,
    height: 300,
    boxShadow: "0 0 4px #C91F61",
    marginBottom: 40,
    [theme.breakpoints.down("md")]: {
      width: 350,
      height: 350,
      marginTop: 5,
      marginBottom: 10,
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 300,
    },
  },
  itemsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    flexWrap: "wrap",
    paddingTop: 30,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignItems: "center",
    },
  },
  itemContainer: {
    flexWrap: "wrap",
    maxWidth: 300,
    marginLeft: 2,
    marginRight: 2,
    [theme.breakpoints.down("md")]: {
      maxWidth: 350,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: "left",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    alignSelf: "center",
    paddingTop: 17,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      fontSize: 28,
      marginTop: 5,
    },
  },
  para: {
    // fontWeight: 400,
    verticalAlign: "baseline",
    // letterSpacing: "-0.7px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      paddingTop: 5,
      marginTop: 0,
    },
  },
}));

const Characters = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Game Characters</h6>
      <div className={classes.itemsContainer}>
        <div className={classes.itemContainer}>
          <CardMedia className={classes.image} image={warrior} />
          <h5>Warrior</h5>
          <p className={classes.para}>
            <ul>
              <li>
                The Warrior is a character with high strength and the most powerful one in PolkaWar.
                <br />
              </li>
              <li>
                <strong>Weapons: </strong>Sword, Big Knife, Tessen
              </li>
            </ul>
          </p>
        </div>

        <div className={classes.itemContainer}>
          <CardMedia className={classes.image} image={magician} />
          <h5>Magician</h5>
          <p className={classes.para}>
            <ul>
              <li>
                The magician is the character who has mysterious magic, supernatural tricks and inherits the power of the evil darkness.
                <br />
              </li>
              <li>
                <strong>Weapons:</strong> Use both Magic Vase & Sceptre
              </li>
            </ul>
          </p>
        </div>

        <div className={classes.itemContainer}>
          <CardMedia className={classes.image} image={archers} />
          <h5>Archer</h5>
          <p className={classes.para}>
            <ul>
              <li>
                The archer is the character with fast attack speed and angelic beauty.
                <br />
              </li>
              <li>
                <strong>Weapons:</strong> Bow & Arrow, Gun
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Characters;
