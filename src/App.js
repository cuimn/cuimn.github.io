import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";

/*
import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Coursework from "./components/Coursework";
import Forfun from "./components/Forfun";
import Delineate from "./components/Delineate";

const Body = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;
`;
*/

import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Abt from "./pages/Abt";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

import { colors, fonts, mediaQueries } from "./shared/config";
const { green, darkgreen, grey, darkgrey, beige, darkbeige, brown } = colors;
const { serif, sanserif } = fonts;
const { notMobile, largeDesktop } = mediaQueries;

const Nav = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80vw;
  margin: auto;

  padding-top: 1.5em;
  padding-bottom: 0.5em;

  position: sticky;
  top: 0;

  background: ${beige};

  border-bottom: 1px solid ${darkbeige};

  ${notMobile} {
    width: 55vw;
    padding-top: 2em;
    padding-bottom: 1em;
  }

  ${largeDesktop} {
    width: 1000px;
  }
`;

const Header = styled("div")`
  font-size: 18px;

  ${notMobile} {
    font-size: 23px;
  }

  a {
    color: ${darkgreen};
    font-family: ${serif};
    text-decoration: none;
    cursor: crosshair;
  }

  a:hover {
    color: ${green};
  }
`;

const Links = styled("div")`
  font-size: 15px;
  width: 40%;
  font-family: ${sanserif};

  ${notMobile} {
    width: 150px;
    font-size: 18px;
  }

  display: flex;
  justify-content: space-between;

  a {
    color: ${green};
    font-family: ${sanserif};
    text-decoration: none;
    cursor: crosshair;
    font-weight: 600;
  }

  a:hover {
    color: ${darkgreen};
  }
`;

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Nav>
          <Header>
            <Link to="/">mncui.</Link>
          </Header>
          <Links>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
          </Links>
        </Nav>
        <Switch>
          <Route path="/about">
            <Abt />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>

    /*
    <div className="App">
      <Body>
        <About />
        <Delineate />
        <Experience />
        <Delineate />
        <Projects />
        <Delineate />
        <Forfun />
      </Body>
      <Footer />
    </div>
    */
  );
}

export default App;
