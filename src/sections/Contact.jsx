import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionHeading } from '../components/layout';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 4rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryText};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primaryText};
    outline: none;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.primaryBg};
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 8px;
  margin-top: 1rem;
  
  &:hover {
    background-color: #000;
  }
`;

const Contact = () => {
    return (
        <Section id="contact" bg="secondary">
            <Container>
                <ContactContainer
                    as={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <SectionHeading align="center">Let's Talk</SectionHeading>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" placeholder="John Doe" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" placeholder="john@example.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Message</Label>
                            <TextArea placeholder="Tell us about your project..." />
                        </FormGroup>
                        <SubmitButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            Send Message
                        </SubmitButton>
                    </Form>
                </ContactContainer>
            </Container>
        </Section>
    );
};

export default Contact;
