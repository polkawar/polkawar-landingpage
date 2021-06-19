import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import SportsEsportsOutlined from '@material-ui/icons/SportsEsportsOutlined';
import TrendingUpOutlined from '@material-ui/icons/TrendingUpOutlined';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      justifyContent: 'center',
    },
  },
  itemsContainer: {
    display: 'flex',
    // justifyContent: "space-between",
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
    alignItems: 'start',
    justifyContent: 'space-around',
  },
  item: {
    marginBottom: 40,
    maxWidth: 400,
    marginLeft: 12,
    marginRight: 12,
  },
  heading: {
    color: theme.palette.pbr.textPrimary,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 15,

      fontSize: 28,
      marginBottom: 25,
    },
  },
  subHeading: {
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 15,

      marginBottom: 25,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,
    verticalAlign: 'baseline',
    // letterSpacing: "-0.7px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      paddingTop: 5,
      marginTop: 0,
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
  },
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Polkawar Products</h6>

      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <SportsEsportsOutlined fontSize="large" />
            PolkaWar Realm
          </h5>
          <p className={classes.para}>
            The NFT-based decentralized fighting game. Everyone can create or build their own characters, battle to have
            fun and earn more profits. There will be two arenas: individual and team. There is also a mission and
            rewards system for each level.
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <TrendingUpOutlined fontSize="large" /> PolkaWar Marketplace
          </h5>
          <p className={classes.para}>
            The NFT marketplace, where players can buy, sell and bid equipment or weapons for their character. The
            players can acquire funds by selling their upgraded equipment and weapons, in the native PWAR token.
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <CardGiftcardOutlined fontSize="large" /> PolkaWar Logistics
          </h5>
          <p className={classes.para}>
            Logistics is a solution for those who want to own NFT in the real world. Logistics will allow conversion of
            NFT items (equipment and weapons) to physical real-world tangible items. Through the Logistics system,
            PolkaWar will ship the product directly to the buyer's address. This new feature promises a novel and
            extremely attractive function in the NFT marketplace field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
