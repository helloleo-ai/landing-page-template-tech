import React from 'react';
import styled from 'styled-components';

const SpecsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(rgba(26, 26, 26, 0.95), rgba(26, 26, 26, 0.95)),
    url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpecItem = styled.div`
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 10px;
  animation: fadeIn 0.6s ease-out ${props => props.index * 0.2}s backwards;
`;

const SpecTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00ff87;
`;

const SpecDescription = styled.p`
  color: #f0f0f0;
  line-height: 1.6;
`;

function Specs() {
  const specifications = [
    {
      title: "Display",
      description: "4K OLED micro-displays with 120Hz refresh rate"
    },
    {
      title: "Processor",
      description: "Custom ARM-based chipset with dedicated AI processing"
    },
    {
      title: "Memory",
      description: "8GB RAM with 128GB storage capacity"
    },
    {
      title: "Connectivity",
      description: "5G, Wi-Fi 6E, Bluetooth 5.2"
    }
  ];

  return (
    <SpecsSection id="specs">
      <Container>
        <Title>Technical Specifications</Title>
        <SpecsGrid>
          {specifications.map((spec, index) => (
            <SpecItem key={index} index={index}>
              <SpecTitle>{spec.title}</SpecTitle>
              <SpecDescription>{spec.description}</SpecDescription>
            </SpecItem>
          ))}
        </SpecsGrid>
      </Container>
    </SpecsSection>
  );
}

export default Specs;
