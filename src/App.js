import React from 'react';
import Banner from './_components/Banner';
import { Container, ThemeProvider, CssBaseline } from "@material-ui/core";
import Portfolio from './_components/Portfolio';
import Bio from './_components/Bio';
import Contact from "./_components/Contact";
import Footer from './_components/Footer';
import theme from "./_styles/mainTheme";
import mainStyle from "./_styles/mainStyle";
import TechStack from "./_components/TechStack";

function App() {
  const classes = mainStyle(theme);
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Container>
            <Banner />
            <Bio />
            <TechStack />
            <Portfolio />
            <Contact />
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
