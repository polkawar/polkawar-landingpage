import "./App.css";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/common/Navbar";
import { Fragment } from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <section className="appbar-section">
          <Navbar />
        </section>
        <LandingPage />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
