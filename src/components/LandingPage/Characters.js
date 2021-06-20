import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import warrior from '../../assets/warrior.png';
import magician from '../../assets/magician.png';
import archers from '../../assets/archer.png';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    passingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('sm')]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      justifyContent: 'center',
    },
  },
  image: {
    width: 300,

    marginBottom: 10,
    [theme.breakpoints.down('md')]: {
      width: 350,
      height: 'auto',
      marginTop: 5,
      marginBottom: 10,
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingTop: 30,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignItems: 'center',
    },
  },
  itemContainer: {
    flexWrap: 'wrap',
    maxWidth: 300,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,

    [theme.breakpoints.down('md')]: {
      maxWidth: 350,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 17,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      fontSize: 28,
      marginTop: 5,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.5px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'left',

    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      paddingTop: 5,
      marginTop: 0,
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    color: theme.palette.pbr.textPrimary,
  },
}));

const Characters = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Game Characters</h6>
      <div className={classes.itemsContainer}>
        <div className={classes.itemContainer}>
          <img className={classes.image} src={warrior} />
          <h5 className="text-center" className={classes.title}>
            Warrior
          </h5>
          <Typography className={classes.para}>
            <ul>
              <li>
                The Warrior is a character with high strength and the most powerful one in PolkaWar.
                <br />
              </li>
              <li>
                <strong>Weapons: </strong>Sword, Big Knife, Tessen
              </li>
            </ul>
          </Typography>
        </div>

        <div className={classes.itemContainer}>
          <img className={classes.image} src={magician} />
          <h5 className="text-center" className={classes.title}>
            Magician
          </h5>
          <Typography className={classes.para}>
            <ul>
              <li>
                The magician is the character who has mysterious magic, supernatural tricks and inherits the power of
                the evil darkness.
                <br />
              </li>
              <li>
                <strong>Weapons:</strong> Use both Magic Vase & Sceptre
              </li>
            </ul>
          </Typography>
        </div>

        <div className={classes.itemContainer}>
          <div>
            <img className={classes.image} src={archers} />
          </div>
          <h5 className="text-center" className={classes.title}>
            Archer
          </h5>
          <Typography className={classes.para}>
            <ul>
              <li>
                The archer is the character with fast attack speed and angelic beauty.
                <br />
              </li>
              <li>
                <strong>Weapons:</strong> Bow & Arrow, Gun
              </li>
            </ul>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Characters;
