import {
  Avatar,
  IconButton,
  makeStyles,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import research from "../../assets/research.png";
import farming from "../../assets/farming.png";
import launch from "../../assets/launch.png";
import tokenomics from "../../assets/tokenomics.png";
import chain from "../../assets/chain.png";
import integration from "../../assets/integration2.png";
import cross_chain from "../../assets/cross_chain.png";
import features from "../../assets/features.png";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
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
    [theme.breakpoints.down("md")]: {
      height: "60vh",
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
  highlight: {
    color: theme.palette.pbr.primary,
  },
  baseline: {
    display: "flex",
    alignSelf: "center",
    height: 5,
    width: "100%",
    backgroundColor: theme.palette.pbr.primary,
    verticalAlign: "baseline",
  },
  icon: {
    fontSize: 48,
    color: "#616161",
  },
  details: {},
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
  stepperContainer: {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "flex-start",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
  },
  step: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "start",
    width: 250,
  },
  stepContent: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: 250,
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
    x === shift * ([1, 2, 3, 4, 5, 6, 7, 8, 9].length - 8)
      ? setX(x + shift)
      : setX(0);
  };

  const goRightTab = () => {
    x === -shift * ([1, 2, 3, 4, 5, 6].length - 4) ? setX(0) : setX(x - shift);
  };
  const goLeftTab = () => {
    x === shift * ([1, 2, 3, 4, 5, 6].length - 4) ? setX(x + shift) : setX(0);
  };

  const goRightMob = () => {
    x === -shift * ([1, 2, 3, 4, 5].length - 1) ? setX(0) : setX(x - shift);
  };
  const goLeftMob = () => {
    x === shift * ([1, 2, 3, 4, 5].length - 1) ? setX(x + shift) : setX(0);
  };

  const handleLeftCarouselScroll = () => {
    if (window.innerWidth < 900) {
      goLeftMob();
    } else if (window.innerWidth > 1050) {
      goLeft();
    } else {
      goLeftTab();
    }
  };

  const handleRightCarouselScroll = () => {
    if (window.innerWidth < 900) {
      goRightMob();
    } else if (window.innerWidth > 1050) {
      goRight();
    } else {
      goRightTab();
    }
  };

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>
          PolkaWar RoadMap<strong className={classes.highlight}></strong>
        </h6>
        {/* <p className={classes.para}>
          Fundamentally strong and visionary project with strong foundation.
        </p> */}
      </div>

      <div className={classes.sliderContainer}>
        <IconButton className="c--right" onClick={handleLeftCarouselScroll}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>

        <div className="slider">
          <Stepper
            nonLinear={true}
            activeStep={steps.length}
            alternativeLabel
            className={classes.stepperContainer}
          >
            {steps.map((stepData, index) => (
              <Step
                completed={stepData.completed}
                key={stepData.id}
                active={true}
                className={["slide", classes.step].join(" ")}
                style={{
                  transform: `translateX(${x}%)`,
                }}
              >
                <StepLabel
                  icon={<Avatar src={stepData.icon} variant="rounded" />}
                >
                  <h3>{stepData.title}</h3>
                </StepLabel>

                <StepContent className={classes.stepContent}>
                  <h5
                    style={{
                      fontSize: 14,
                      // fontWeight: 550,
                      // marginBottom: 12,
                    }}
                  >
                    {stepData.heading}
                  </h5>
                  <ul>
                    {stepData.subheadings.map((subheading) => (
                      <li style={{ marginRight: -5 }}>
                        <p style={{ fontSize: 14 }}>{subheading}</p>
                      </li>
                    ))}
                  </ul>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>

        <IconButton className="c--right" onClick={handleRightCarouselScroll}>
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Roadmap;
