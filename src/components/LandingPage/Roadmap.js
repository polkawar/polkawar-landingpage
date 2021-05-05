import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import research from "../../assets/research.png";
import farming from "../../assets/farming.png";
import launch from "../../assets/launch.png";
import tokenomics from "../../assets/tokenomics.png";
import chain from "../../assets/chain.png";
import integration from "../../assets/integration2.png";
import cross_chain from "../../assets/cross_chain.png";
import features from "../../assets/features.png";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const getStepsData = () => {
  return [
    {
      id: "1",
      title: "Q1, 2021",
      heading: "Research",
      subheadings: [
        "Research on Defi & NFTs",
        "Team forming",
        "Design PWAR tokenomics",
      ],
      completed: true,
      icon: research,
    },
    {
      id: "2",
      title: "Q2, 2021",
      heading: "MVP & Sale",
      subheadings: [
        "Release PWAR token smart contract",
        "Private sale",
        "Whitepaper & website",
        "MVP",
        "NFT Airdrop campaign",
        "Public sale & listing on Uniswap",
        "Staking & Farming",
      ],
      completed: true,
      icon: tokenomics,
    },
    {
      id: "3",
      title: "Q3, 2021",
      heading: "Testnet",
      subheadings: [
        "Character system",
        "Battle system",
        "PolkaWar marketplace testnet",
        "PolkaWar Realm testnet",
      ],
      completed: false,
      icon: farming,
    },
    {
      id: "4",
      title: "Q4, 2021",
      heading: "Mainnet",
      subheadings: [
        "Equipment system",
        "PolkaWar marketplace mainnet",
        "PolkaWar Realm mainnet",
      ],
      completed: false,
      icon: launch,
    },
    {
      id: "5",
      title: "Q1, 2022",
      heading: "PolkaWar Logictic",
      subheadings: ["NFT Renting", "PolkaWar Logictics"],
      completed: false,
      icon: chain,
    },
  ];
};

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 20,
    height: "100vh",
    [theme.breakpoints.between("lg")]: {
      height: "80vh",
      padding: 0,
      paddingBottom: 15,
      paddingTop: 50,
    },
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      padding: 0,
      paddingBottom: 15,
      paddingTop: 60,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingTop: 50,
    marginBottom: 40,

    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    // fontWeight: 400,
    verticalAlign: "baseline",
    // letterSpacing: "-0.8px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  icon: {
    fontSize: 48,
    color: "#616161",
  },
  title: {
    fontWeight: 600,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    textAlign: "left",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
  list: {
    width: 200,
    paddingLeft: 15,
    fontSize: 14,
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const Roadmap = () => {
  const classes = useStyles();

  const steps = getStepsData();

  const [x, setX] = useState(0);
  const [shift, setShift] = useState(100);

  const goRight = () => {
    x === -shift * ([1, 2, 3, 4, 5, 6, 7, 8, 9].length - 8)
      ? setX(0)
      : setX(x - shift);
  };
  const goLeft = () => {
    x === shift * ([1, 2, 3, 4, 5, 6, 7, 8, 9].length - 9)
      ? setX(x + shift)
      : setX(0);
  };

  const goRightMob = () => {
    x === -shift * ([1, 2, 3, 4, 5].length - 1) ? setX(0) : setX(x - shift);
  };
  const goLeftMob = () => {
    x === shift * ([1, 2, 3, 4, 5].length - 1) ? setX(x + shift) : setX(0);
  };

  const handleLeftCarouselScroll = () => {
    if (window.innerWidth < 950) {
      goLeftMob();
    } else {
      goLeft();
    }
  };

  const handleRightCarouselScroll = () => {
    if (window.innerWidth < 900) {
      goRightMob();
    } else {
      goRight();
    }
  };

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>
          PolkaWar RoadMap<strong className={classes.highlight}></strong>
        </h6>
      </div>

      <div className="row g-0 align-items-center ">
        <div className="col-2 col-md-1">
          <IconButton className="c--right" onClick={handleLeftCarouselScroll}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        </div>

        <div className="col-8 col-md-10">
          <div className="slider">
            {steps.map((stepData, index) => (
              <div
                key={index}
                className="slide"
                style={{
                  transform: `translateX(${x}%)`,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Avatar src={stepData.icon} variant="rounded" />
                  <hr style={{ width: "95%", marginTop: 1, marginBottom: 3 }} />
                  <h3 style={{}}>{stepData.title}</h3>
                  <h5 style={{ fontSize: 14 }}>{stepData.heading}</h5>
                  <ul style={{ borderLeft: "1px solid   gray	" }}>
                    {stepData.subheadings.map((subheading) => (
                      <li style={{ marginRight: -5 }}>
                        <p style={{ fontSize: 14 }}>{subheading}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-2 col-md-1">
          <IconButton className="c--right" onClick={handleRightCarouselScroll}>
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
