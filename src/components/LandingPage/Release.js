import { CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 35,
      height: '400px',
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    textAlign: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      marginBottom: 50,
    },
  },

  image: {
    width: 950,
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '95%',
      height: 'auto',
    },
  },
}));

const Release = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Token release schedule</h6>
      <img className={classes.image} src="assets/release.png" alt="release schedule" />
    </div>
  );
};

export default Release;
