import { CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      minHeight: '80vh',
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
      marginBottom: 140,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      marginBottom: 100,
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
