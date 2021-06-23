import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import warrior from '../../assets/warrior-card.png';
import magician from '../../assets/magician-card.png';
import archers from '../../assets/archer-card.png';
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
    width: 350,

    marginBottom: 10,
    [theme.breakpoints.down('md')]: {
      width: '100%',

      marginTop: 5,
      marginBottom: 10,
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 30,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
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
      width: '100%',
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
    color: 'black',
    fontSize: 12,
    width: 210,
    [theme.breakpoints.down('md')]: {
      fontSize: 10,
      width: 190,
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    color: theme.palette.pbr.textPrimary,
  },
  frameCard1: {
    background: `url(${warrior})`,
    backgroundRepeat: 'no-repeat',
    height: 600,
    width: 400,
    backgroundSize: 'contain',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 600,
      width: 340,
    },
  },
  frameCard2: {
    background: `url(${magician})`,
    backgroundRepeat: 'no-repeat',
    height: 600,
    width: 400,
    backgroundSize: 'contain',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 600,
      width: 340,
    },
  },
  frameCard3: {
    background: `url(${archers})`,
    backgroundRepeat: 'no-repeat',
    height: 600,
    width: 400,
    backgroundSize: 'contain',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 600,
      width: 340,
    },
  },

  frameStats: {
    position: 'absolute',
    top: '61%',
    left: '20%',
    [theme.breakpoints.down('md')]: {
      top: '53%',
      left: '17%',
    },
  },
  frameList: {
    fontWeight: '500',
    lineHeight: 1.2,
    color: 'black',
  },
  frameListMount: {
    fontWeight: '500',
    lineHeight: 1.1,
    color: 'black',
    fontSize: 13,
  },
}));

const Characters = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Game Characters</h6>
      <div className={classes.itemsContainer}>
        <div className={classes.itemContainer}>
          <div className={classes.frameCard1}>
            <div className={classes.frameStats}>
              {' '}
              <div className={classes.para}>
                <ul>
                  <li>
                    The Warrior is a character with high strength and the most powerful one in PolkaWar.
                    <br />
                  </li>
                  <li>
                    <strong>Weapons: </strong>Sword, Big Knife, Tessen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.itemContainer}>
          <div className={classes.frameCard2}>
            <div className={classes.frameStats}>
              {' '}
              <div className={classes.para}>
                <ul>
                  <li>
                    The magician is the character who has mysterious magic, supernatural tricks and inherits the power
                    of the evil darkness.
                    <br />
                  </li>
                  <li>
                    <strong>Weapons:</strong> Use both Magic Vase & Sceptre
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.itemContainer}>
          <div className={classes.frameCard3}>
            <div className={classes.frameStats}>
              {' '}
              <div className={classes.para}>
                <ul>
                  <li>
                    The archer is the character with fast attack speed and angelic beauty.
                    <br />
                  </li>
                  <li>
                    <strong>Weapons:</strong> Bow & Arrow, Gun
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
