import React from 'react';
import headerRight from '../../assets/header-right.png';
import { makeStyles, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    minHeight: '80vh',
    color: 'white',
    textShadow: '3px 4px black',
    paddingLeft: 60,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  heading: {
    textAlign: 'left',
    fontSize: 44,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    fontFamily: 'Balsamiq Sans',
    lineHeight: '60px',
    // marginTop: 30,
    paddingTop: 150,
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
  image: {
    width: '100%',
    marginBottom: 10,
    [theme.breakpoints.down('md')]: {
      width: 350,
      height: 'auto',
      marginTop: 5,
      marginBottom: 10,
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
  para: {
    lineHeight: '50px',
  },
  buttonGame: {
    borderRadius: '30px',
    background: `linear-gradient(to right,#6a1b9a, #8e24aa)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-1px',
    margin: 0,
    marginTop: 15,
    color: '#ffffff',
    padding: '18px 20px 18px 20px',
    fontWeight: 600,
    fontSize: '1.2vw',
    textTransform: 'none',

    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {' '}
            <Typography variant="h3" className={classes.heading}>
              Innovative DeFi and NFT <br />
              Gaming Platform
            </Typography>
            <Typography variant="body1" className={classes.para}>
              Experience a new era of blockchain based gaming platform
            </Typography>
            <div>
              <a href="https://game.polkawar.com">
                <Button className={classes.buttonGame} variant="contained">
                  Access Game Portal
                </Button>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img className={classes.image} src={headerRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
