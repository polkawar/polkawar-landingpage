import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import sword from '../../assets/sword.png';
import bigknife from '../../assets/bigknife.png';
import tessen from '../../assets/tessen.png';
import bow from '../../assets/bow.png';
import gun from '../../assets/gun.png';
import sceptre from '../../assets/sceptre.png';
import magicvase from '../../assets/magicvase.png';
import armor from '../../assets/armor1.png';
import helmet from '../../assets/helmet3.png';
import wing from '../../assets/wing3.png';
import monut from '../../assets/mount.jpg';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
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
    padding: 30,
    width: 250,

    [theme.breakpoints.down('sm')]: {
      width: 150,
      height: 150,
      marginTop: 15,
      marginBottom: 10,
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
  },
  itemGroup: {
    maxWidth: 250,
    paddingLeft: 10,
    paddingRight: 10,
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
    [theme.breakpoints.down('md')]: {
      marginBottom: 20,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      fontSize: 28,
      marginTop: 5,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.7px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      paddingTop: 5,
      marginTop: 0,
    },
  },
  title: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 600,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: 300,
    height: '100%',
    backgroundColor: '#ffb74d',
    border: '3px solid #757575',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url('https://media.istockphoto.com/photos/fire-flames-isolated-on-black-picture-id1138307761?k=6&m=1138307761&s=612x612&w=0&h=88Awwf62GbZb26IMLWv8I66D7WU_P_voCdzZEBu4Bvo=')`,
    backgroundSize: 'cover',
    marginBottom: 40,
  },
  textWrapper: {
    backgroundColor: '#e5e5e5',
    width: '100%',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
}));

const GameItems = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h1 className={classes.heading}>Game Items</h1>

      <div className={classes.itemsContainer}>
        <Card className={classes.card}>
          <img className={classes.image} src={sword} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Sword</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>Base Damage: 30</li>
                <li>Bonus: +7%</li>
                <li>Accuracy: +5</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.image} src={bigknife} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Big Knife</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>Base Damage: 32</li>
                <li>Bonus: +5%</li>
                <li>Accuracy: +4</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <div>
            <img className={classes.image} src={tessen} />
          </div>
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Tessen</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>Base Damage: 26</li>
                <li>Bonus: +8%</li>
                <li>Accuracy: +4</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.image} src={bow} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Bow & Arrow</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>Base Damage: 29</li>
                <li>Bonus: +9%</li>
                <li>Accuracy: +4</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.image} src={gun} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Gun</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>Base Damage: 36</li>
                <li>Bonus: +5%</li>
                <li>Accuracy: +3</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.image} src={sceptre} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Sceptre</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>Base Damage: 31</li>
                <li>Bonus: +6%</li>
                <li>Accuracy: +3</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.image} src={magicvase} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Magic Vase</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>Base Damage: 2</li>
                <li>Bonus: +6%</li>
                <li>Accuracy: +1</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.image} src={armor} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Armor</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>HP: 10</li>
                <li>MP: 6</li>
                <li>Protection: +5</li>
              </ul>
            </p>
          </div>
        </Card>

        <Card className={classes.card}>
          <img className={classes.image} src={helmet} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Helmet</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>HP: 5</li>
                <li>MP: 3</li>
                <li>Protection: +2</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.image} src={wing} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Wing</h5>
            <p className={classes.para}>
              <ul>
                <li>Level: 1 / 5</li>
                <li>HP: 7</li>
                <li>MP: 5</li>
                <li>Protection: +3</li>
              </ul>
            </p>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.image} src={monut} />
          <div className={classes.textWrapper}>
            <h5 className={classes.title}>Mount</h5>
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
        </Card>
      </div>
      {/* </div> */}
    </div>
  );
};

export default GameItems;
