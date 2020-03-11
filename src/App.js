import React from 'react';
import './App.css';
import Banner from './_components/Banner';
import {Container} from "@material-ui/core";
import Portfolio from './_components/Portfolio';
import Bio from './_components/Bio';
import Contact from "./_components/Contact";
import Footer from './_components/Footer';

function App() {
  return (
    <div className="App">
      <Container>
          <Banner />
          <Bio />
          <Portfolio />
          <Contact />
          <Footer />
      </Container>
    </div>
  );
}

export default App;
