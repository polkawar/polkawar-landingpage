import { IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter, Telegram, GitHub, Email } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  background: {
    marginTop: 150,
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      padding: 5,
      paddingTop: 0,
      paddingBottom: 25,
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 32,
    color: '#000000',
  },
  iconWrapper: {
    marginRight: 15,
  },
  iconButton: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    color: 'black',
    '&:hover': {
      background: theme.palette.pbr.primary,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="text-center ">
        <div>
          <h6 className={classes.heading}>
            Follow PolkaWar<span className={classes.highlight}></span>
          </h6>
          <p className={classes.para}>To Get latest updates on PolkaWar join!</p>
          <div className="d-flex justify-content-center mt-4">
            <div className={classes.iconWrapper}>
              <Tooltip title="Twitter" aria-label="add1">
                <a href="https://twitter.com/polkawarnft">
                  <IconButton aria-label="Twitter" className={classes.iconButton}>
                    <Twitter className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
            <div className={classes.iconWrapper}>
              <Tooltip title="Telegram">
                <a href="https://t.me/polkawarchat">
                  <IconButton aria-label="Telegram" className={classes.iconButton}>
                    <Telegram className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>

            <div className={classes.iconWrapper}>
              <Tooltip title="Github">
                <a href="https://github.com/polkawar">
                  <IconButton aria-label="Github" className={classes.iconButton}>
                    <GitHub className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>

            <div className={classes.iconWrapper}>
              <Tooltip title="Discord">
                <a href="https://discord.gg/NQFjXkMqgk">
                  <IconButton aria-label="Discord" className={classes.iconButton}>
                    <img
                      src="assets/discord.png"
                      height="30px"
                      width="30px"
                      style={{ opacity: 0.75, marginTop: 2 }}
                      alt="discord"
                    />
                  </IconButton>
                </a>
              </Tooltip>
            </div>

            <div className={classes.iconWrapper}>
              <Tooltip title="Medium">
                <a href="https://medium.com/@polkawar">
                  <IconButton aria-label="Discord" className={classes.iconButton}>
                    <img
                      src="assets/medium.png"
                      height="30px"
                      width="30px"
                      style={{ opacity: 0.75, marginTop: 2 }}
                      alt="medium"
                    />
                  </IconButton>
                </a>
              </Tooltip>
            </div>

            <div className={classes.iconWrapper}>
              <Tooltip title="Email">
                <a href="mailto:hello@polkawar.com">
                  <IconButton aria-label="Email" className={classes.iconButton}>
                    <Email className={classes.icon} />
                  </IconButton>
                </a>
              </Tooltip>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 100 }}>
            <div>
              <img src="assets/logo.png" alt="logo" height="50px" />
            </div>
            <p className={classes.para}>
              Copyright 2021 <span className={classes.highlight}>PolkaWar</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
