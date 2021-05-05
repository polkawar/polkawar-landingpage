import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleAltOutlined from "@material-ui/icons/PeopleAltOutlined";
import FlareOutlined from "@material-ui/icons/FlareOutlined";
import TimelineOutlined from "@material-ui/icons/TimelineOutlined";
import TouchAppOutlined from "@material-ui/icons/TouchAppOutlined";
import VpnLockOutlined from "@material-ui/icons/VpnLockOutlined";
import DescriptionOutlined from "@material-ui/icons/DescriptionOutlined";
import CategoryIcon from "@material-ui/icons/Category";
import TimerIcon from "@material-ui/icons/Timer";

import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarBackground: {
    boxShadow: "none",
    background: `linear-gradient(to bottom,    #c91f61, #f8f8f8)`,
  },
  menuButton: {
    textTransform: "none",
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
  },
  iconText: {
    fontSize: 15,
  },
  icon: {},

  sectionDesktop: {
    marginLeft: 150,
    marginRight: 100,
    // marginTop: 50,
    [theme.breakpoints.down("md")]: {
      marginLeft: 5,
      marginRight: 5,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionMobile: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  row1: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    // [theme.breakpoints.up("md")]: {
    //   display: "none",
    // },
  },

  home: {
    "text-decoration": "none",
    color: "black",
    cursor: "pointer",
    marginRight: 5,
    marginLeft: 5,
  },
  nav: {
    marginRight: 15,
  },
  menuIcon: {
    color: "#212121",
  },
  list: {
    width: "250px",
    height: "100%",
    backgroundColor: "transparent",
  },
  fullList: {
    width: "auto",
  },
  menuTitleMobile: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    fontFamily: "New Rocker, cursive",
    textAlign: "left",
    fontSize: 16,
  },
  navbarItemsDesktop: {
    paddingTop: 15,
    height: 50,
    textTransform: "none",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 5,
      fontSize: 10,
    },
  },
  navbarShareIcons: {
    marginRight: 15,
    marginLeft: 15,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileLink: {
    color: theme.palette.pbr.textSecondary,
    textDecoration: "none",
  },
  mobileButton: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    color: "#ffffff",
    padding: "5px 15px 5px 15px",
    fontWeight: 600,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: "Introduction", id: "intro", icon: <TouchAppOutlined /> },
          {
            name: "Characters",
            id: "characters",
            icon: <PeopleAltOutlined />,
          },
          { name: "Game Items", id: "items", icon: <VpnLockOutlined /> },
          { name: "Features", id: "features", icon: <FlareOutlined /> },
          { name: "PWAR Token", id: "usecase", icon: <CategoryIcon /> },
          { name: "Roadmap", id: "roadmap", icon: <TimelineOutlined /> },
          {},
        ].map((tab, index) => (
          <Link
            activeClass="active"
            to={tab.id}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
          >
            <ListItem
              button
              key={tab.name}
              onClick={toggleDrawer(anchor, false)}
            >
              {tab.icon}
              <ListItemText
                primary={tab.name}
                className={classes.menuTitleMobile}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button style={{ marginTop: 15 }}>
          <a href="docs/whitepaper.pdf" style={{ textDecoration: "none" }}>
            <Button
              style={{
                backgroundColor: "#c91f61",
                color: "#f8f8f8",
                borderRadius: 25,
              }}
              variant="outlined"
              href="https://polkawar.com/docs/whitepaper.pdf"
              startIcon={<DescriptionOutlined />}
            >
              Read white paper
            </Button>
          </a>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        color="transparent"
        position="fixed"
        className={classes.appBarBackground}
      >
        <Toolbar className={classes.sectionDesktop}>
          <Link
            exact="true"
            activeClass="active"
            to="header-section"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}
          >
            <Avatar
              variant="square"
              src="assets/logo.png"
              style={{ height: 60, width: 112 }}
            />
          </Link>
          <div className={classes.grow} />

          <Link
            exact="true"
            activeClass="active"
            to="intro"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}
          >
            <Button className={classes.navbarItemsDesktop}>
              <p>Introduction </p>
            </Button>
          </Link>
          <Link
            exact="true"
            to="characters"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}
          >
            <Button className={classes.navbarItemsDesktop}>
              <p>Characters</p>
            </Button>
          </Link>
          <Link
            exact="true"
            to="items"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}
          >
            <Button className={classes.navbarItemsDesktop}>
              <p>Game Items</p>
            </Button>
          </Link>
          <Link
            exact="true"
            to="features"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}
          >
            <Button className={classes.navbarItemsDesktop}>
              <p>Features</p>
            </Button>
          </Link>
          <Link
            exact="true"
            to="usecase"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}
          >
            <Button className={classes.navbarItemsDesktop}>
              <p>Tokenomics</p>
            </Button>
          </Link>

          <Link
            exact="true"
            to="roadmap"
            smooth={true}
            offset={0}
            duration={400}
            delay={0}
            className={classes.home}
          >
            <Button className={classes.navbarItemsDesktop}>
              <p>Roadmap</p>
            </Button>
          </Link>

          <Tooltip title="Polkawar White Paper">
            <Button
              style={{
                backgroundColor: "#c91f61",
                color: "#f8f8f8",
                borderRadius: 25,
                height: 35,
                marginBottom: 2,
                marginLeft: 20,
              }}
              variant="outlined"
              color="#021f47"
              href="https://polkawar.com/docs/whitepaper.pdf"
              startIcon={<DescriptionOutlined />}
            >
              <p style={{ paddingTop: 16 }}> Read white paper</p>
            </Button>
          </Tooltip>
        </Toolbar>

        <Toolbar className={classes.sectionMobile}>
          <div className={classes.row1}>
            <div className={classes.grow} />
            <Link
              exact="true"
              exact="true"
              activeClass="active"
              to="header-section"
              smooth={true}
              offset={0}
              duration={500}
              delay={0}
              className={classes.home}
            >
              <Avatar
                variant="square"
                src="assets/logo.png"
                style={{ height: 55, width: 110 }}
              />
            </Link>

            <div className={classes.grow} />
            <div>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    aria-label="Menu"
                    aria-haspopup="true"
                    className={classes.menuIcon}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon />
                  </IconButton>

                  <SwipeableDrawer
                    anchor={anchor}
                    disableSwipeToOpen={false}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
