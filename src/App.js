import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Specs from './components/Specs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <Features />
      <Specs />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
