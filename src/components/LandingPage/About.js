import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import war3 from '../../assets/pwr.png';

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 150,
    paddingBottom: 150,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('sm')]: {
      padding: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
  },
  image: {
    width: 700,
    height: 'auto',
    marginTop: 50,
    marginBottom: 10,
    [theme.breakpoints.down('md')]: {
      width: 550,
      height: 'auto',
      marginTop: 50,
      marginBottom: 30,
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: 'auto',
      marginTop: 60,
      marginBottom: 20,
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 650,
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.down('md')]: {
      maxWidth: '70%',
      marginTop: 35,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
      marginTop: 35,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
      marginTop: 35,
    },
  },
  subHeading: {
    fontSize: 28,
    fontFamily: 'Balsamiq Sans',
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      marginTop: 10,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    margin: 0,
    letterSpacing: '-0.6px',
    paddingTop: 6,
    paddingBottom: 10,
    textAlign: 'left',
    lineHeight: 1.75,
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      marginTop: 10,
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <img src={war3} className={classes.image} />

      <div className={classes.textContainer}>
        <h5 className={classes.subHeading}>The Decentralized Fighting Game Platform</h5>
        <Typography component="p" className={classes.para}>
          PolkaWar is a blockchain based NFT gaming platform and marketplace.
          <br />
          Inspired by the recent crypto NFT and gaming narratives, PolkaWar will combine and synergize them both to
          build an attractive platform.
          <br />
          The game allows every player to build a character and participate in battle against other players.
          <br />
          Further, PolkaWar will also include an NFT marketplace, where players can sell their items, weapons and
          upgraded equipment for crypto. Some of the items can even be redeemed for real world replicas.
        </Typography>
      </div>
    </div>
  );
};

export default About;
