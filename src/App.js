import React from 'react';
import Media from "react-media";
import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1';
import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import NavBarHamburger from './components/NavBarHamburger';
import WhatsappButton from './components/WhatsappButton';

function App() {

  return (
    <div className="App">
      <Media
        queries={{
          small: "(max-width: 750px)",
          notSmall: "(min-width: 751px)"
        }}
      >
        {matches => (
          <>
            {matches.small && <NavBarHamburger/>}
            {matches.notSmall && <NavBar/>}
          </>
        )}
      </Media>
      <Section1 />
      <About />
      <Contact />
      <footer>COPYRIGHT © 2020 - Lucas Gerhardt de Camargo</footer>
      <WhatsappButton />

    </div>
  );
}

export default App;
