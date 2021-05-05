import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "left",
    fontSize: 44,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    fontFamily: "'New Rocker', cursive",
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
      marginTop: 10,
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // paddingLeft: 100,
            height: "100vh",
            paddingTop: "250px",
            color: "white",
            textShadow: "3px 4px black",
          }}
        >
          <Typography variant="h3" className={classes.heading}>
            Innovative DeFi and NFT Gaming Platform
          </Typography>
        </Grid>

        {/* <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 60,
            }}
          >
            <CardMedia
              className="image-shadow"
              style={{ width: 300, height: 300 }}
              image={war_back}
            />
          </Grid> */}
      </Grid>
    </>
  );
};

export default HomePage;
