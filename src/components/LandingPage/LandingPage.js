import React from 'react';
import About from './About';
import Features from './Features';
import Investor from './Investor';
import Characters from './Characters';
import GameItems from './GameItems';
import Release from './Release';
import Roadmap from './Roadmap';
import HomePage from './HomePage';
import Footer from '../common/Footer';
import Token from './Token';
import Tokenomics from './Tokenomics';

const LandingPage = () => {
  return (
    <div className="cover">
      <section className="header-section">
        <HomePage />
      </section>
      <section id="intro">
        <About />
      </section>
      <section id="characters">
        <Characters />
      </section>
      <section id="items">
        <GameItems />
      </section>

      <section id="features">
        <Features />
      </section>
      <section id="usecase">
        <Token />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <section id="release">
        <Release />
      </section>

      <section id="roadmap">
        <Roadmap />
        <Investor />
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
