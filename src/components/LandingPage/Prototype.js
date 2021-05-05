import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontFamily: "Segoe UI Symbol",
  },
}));

const Prototype = () => {
  const classes = useStyles();
  return (
    <section className="prototype-section">
      <Typography
        variant="h3"
        className={classes.heading}
        style={{ alignSelf: "center" }}
      >
        Get a glimpse of the early prototype
      </Typography>
      <Grid
        container
        className={classes.root}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          paddingTop: 60,
        }}
      >
        <div>
          <iframe
            width="1300"
            height="600"
            src="https://www.youtube.com/embed/aR-KAldshAE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Grid>
    </section>
  );
};

export default Prototype;
