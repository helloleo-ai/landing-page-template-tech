import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 4rem;
  color: #1a1a1a;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  animation: scaleIn 0.6s ease-out ${props => props.index * 0.2}s backwards;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #00ff87;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Features() {
  const features = [
    {
      icon: "🔍",
      title: "HD Display",
      description: "Crystal clear 4K resolution with vibrant colors and deep contrasts"
    },
    {
      icon: "🔋",
      title: "Long Battery Life",
      description: "Up to 12 hours of continuous use on a single charge"
    },
    {
      icon: "🎮",
      title: "Gesture Control",
      description: "Intuitive hand gestures for seamless interaction"
    },
    {
      icon: "🌐",
      title: "5G Connected",
      description: "Lightning-fast connectivity for real-time updates"
    }
  ];

  return (
    <FeaturesSection id="features">
      <Container>
        <Title>Key Features</Title>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
}

export default Features;
