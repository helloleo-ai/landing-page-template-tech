import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 800px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    border-color: #00ff87;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  
  &:focus {
    border-color: #00ff87;
    outline: none;
  }
`;

const SubmitButton = styled.button`
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

function Contact() {
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Handle form submission
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Contact Us</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <TextArea placeholder="Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </Container>
    </ContactSection>
  );
}

export default Contact;
