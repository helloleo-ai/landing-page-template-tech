import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-image: url('https://fs.npstatic.com/userfiles/7695213/image/Xiaomi_Smart_Glasses_01.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
`;

const Title = styled.h1`
  animation: slideUp 1s ease-out;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  animation: slideUp 1s ease-out 0.3s backwards;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 2.5rem;
  color: #f0f0f0;
  font-weight: 400;
`;

const CTAButton = styled.button`
  animation: fadeIn 1s ease-out 0.6s backwards;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: linear-gradient(90deg, #00ff87 0%, #60efff 100%);
  border: none;
  border-radius: 30px;
  color: #1a1a1a;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <Title>The Future of Vision</Title>
        <Subtitle>Experience reality augmented like never before with our cutting-edge smartglasses</Subtitle>
        <CTAButton as={Link} to="features" smooth={true} duration={500}>
          Discover More
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
