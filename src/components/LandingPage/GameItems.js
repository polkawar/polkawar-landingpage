import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";

import sword from "../../assets/sword.png";
import bigknife from "../../assets/bigknife.png";
import tessen from "../../assets/tessen.png";
import bow from "../../assets/bow.png";
import gun from "../../assets/gun.png";
import sceptre from "../../assets/sceptre.png";
import magicvase from "../../assets/magicvase.png";
import armor from "../../assets/armor1.png";
import helmet from "../../assets/helmet3.png";
import wing from "../../assets/wing3.png";
import monut from "../../assets/mount.jpg";


const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: `linear-gradient(to bottom right,#c91f61,
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
    width: 250,
    height: 250,
    boxShadow: "0 0 4px #C91F61",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
      marginTop: 15,
      marginBottom: 10,
    },
  },
  itemsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingTop: 30,
    flexWrap: "wrap",
  },
  itemGroup: {
    flexWrap: "wrap",
    maxWidth: 250,
    marginLeft: 20,
    marginRight: 20,
    [theme.breakpoints.down("md")]: {
      marginLeft: 10,
      marginRight: 10,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 150,
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
    [theme.breakpoints.down("md")]: {
      marginBottom: 20,
    },
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
    paddingBottom: 10,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      paddingTop: 5,
      marginTop: 0,
    },
  },
}));

const GameItems = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Game Items</h6>

      <div className={classes.itemsContainer}>
        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={sword} />
          <h5>Sword</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 30</li>
              <li>Bonus: +7%</li>
              <li>Accuracy: +5</li>
            </ul>
          </p>
        </div>

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={bigknife} />
          <h5>Big Knife</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 32</li>
              <li>Bonus: +5%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={tessen} />
          <h5>Tessen</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 26</li>
              <li>Bonus: +8%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={bow} />
          <h5>Bow & Arrow</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 29</li>
              <li>Bonus: +9%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>

        {/* <div className={classes.itemsContainer}> */}

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={gun} />
          <h5>Gun</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 36</li>
              <li>Bonus: +5%</li>
              <li>Accuracy: +3</li>
            </ul>
          </p>
        </div>

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={sceptre} />
          <h5>Sceptre</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 31</li>
              <li>Bonus: +6%</li>
              <li>Accuracy: +3</li>
            </ul>
          </p>
        </div>

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={magicvase} />
          <h5>Magic Vase</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 2</li>
              <li>Bonus: +6%</li>
              <li>Accuracy: +1</li>
            </ul>
          </p>
        </div>

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={armor} />
          <h5>Armor</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>HP: 10</li>
              <li>MP: 6</li>
              <li>Protection: +5</li>
            </ul>
          </p>
        </div>
        {/* </div> */}
        {/* <div className={classes.itemsContainer}> */}

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={helmet} />
          <h5>Helmet</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>HP: 5</li>
              <li>MP: 3</li>
              <li>Protection: +2</li>
            </ul>
          </p>
        </div>

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={wing} />
          <h5>Wing</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>HP: 7</li>
              <li>MP: 5</li>
              <li>Protection: +3</li>
            </ul>
          </p>
        </div>

        <div className={classes.itemGroup}>
          <CardMedia className={classes.image} image={monut} />
          <h5>Mount</h5>
          <p className={classes.para}>
            <ul>
              <li>Level: 1 / 5</li>
              <li>Energy: 500/500</li>
              <li>Base Damage: 50</li>
              <li>Bonus: +5%</li>
              <li>Accuracy: +10</li>
              <li>Take damage to the owner: +60</li>
            </ul>
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default GameItems;
