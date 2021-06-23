import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import tokenomics_back from '../../assets/tokenomics_back.png';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
      paddingRight: 10,
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'flex-end',
    },
  },
  heading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    paddingTop: 0,
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      marginBottom: 45,
      alignSelf: 'center',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 60,
    backgroundColor: 'black',
    padding: 40,
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      padding: 10,
    },
  },
  listText: {
    color: theme.palette.pbr.textSecondary,
    fontSize: 24,
    fontWeight: 400,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
    },
  },
  image: {
    width: 700,
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      marginTop: 10,
    },
  },
  itemsContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  listItems: {},
  listItem: {
    marginBottom: 10,
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  displayMobile: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  displayDesktop: {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const Tokenomics = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-6">
          <div className={classes.displayDesktop}>
            <div className="text-center">
              {' '}
              <img className={classes.image} src="assets/token.png" alt="tokenomics" />{' '}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={classes.textContainer}>
            <h6 className={classes.heading}>Tokenomics & Locking</h6>
            <div className={classes.displayMobile}>
              <div className="text-center">
                {' '}
                <img className={classes.image} src="assets/token.png" alt="tokenomics" />{' '}
              </div>
            </div>
            <h5 className={classes.subheading}>Unlock Schedule</h5>
            <ul className={classes.listItems}>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Advisor & Strategic </strong>
                  Locked 3 months, 5% vesting for 20 months
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Private Sale</strong> 10% TGE, 10% for 9 months
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Foundation</strong> 20% every 6 month
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>Marketing</strong> 5% vesting for 20 months
                </p>
              </li>
              <li className={classes.listItem}>
                <p>
                  <strong style={{ marginRight: 5 }}>In game mining & Platform staking</strong> 5% vesting for 20 months
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
