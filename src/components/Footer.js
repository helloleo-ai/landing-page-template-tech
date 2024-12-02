import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  padding: 4rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled.a`
  color: #888;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
  
  &:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #888;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Vision</h3>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Press</FooterLink>
        </FooterSection>
        <FooterSection>
          <h3>Products</h3>
          <FooterLink href="#features">Features</FooterLink>
          <FooterLink href="#specs">Specifications</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
        </FooterSection>
        <FooterSection>
          <h3>Support</h3>
          <FooterLink href="#contact">Contact</FooterLink>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </FooterSection>
        <FooterSection>
          <h3>Connect</h3>
          <FooterLink href="#">Twitter</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Vision. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
