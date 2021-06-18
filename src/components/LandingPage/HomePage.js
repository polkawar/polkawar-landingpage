import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    color: 'white',
    marginTop: 60,
    textShadow: '3px 4px black',
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  heading: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    fontFamily: 'Balsamiq Sans',
    // marginTop: 30,
    paddingTop: 250,
    [theme.breakpoints.down('md')]: {
      marginTop: 180,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
      marginTop: 10,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
      marginTop: 0,
    },
  },
  subheading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    marginTop: 20,
    color: '#F0B90B',
    [theme.breakpoints.down('md')]: {
      marginTop: 20,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginTop: 10,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      marginTop: 0,
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.background}>
        <Typography variant="h3" className={classes.heading}>
          Innovative DeFi and NFT Gaming Platform
        </Typography>
      </div>
    </>
  );
};

export default HomePage;
