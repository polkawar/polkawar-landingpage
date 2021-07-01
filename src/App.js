import './App.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/common/Navbar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CirculatingSupply from './components/CirculatingSupply';
import TotalSupply from './components/TotalSupply';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Fragment>
            <Route exact path="/">
              <section className="appbar-section">
                <Navbar />
                <LandingPage />
              </section>
            </Route>
            <Route exact path="/api/cirsupply">
              <CirculatingSupply />
            </Route>
            <Route exact path="/api/totalsupply">
              <TotalSupply />
            </Route>
          </Fragment>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
