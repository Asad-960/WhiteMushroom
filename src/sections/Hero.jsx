import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container } from '../components/layout';

const HeroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding-top: 80px;
`;

const Headline = styled(motion.h1)`
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1.1;
  margin-bottom: 2rem;
  max-width: 900px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const SubHeadline = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.a`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 40px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};
  border: 2px solid ${({ theme }) => theme.colors.primaryText};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

const Hero = () => {
    return (
        <Section bg="primary" id="home">
            <HeroContainer>
                <Headline
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    We Get Your Brand The Attention It Needs
                </Headline>

                <SubHeadline
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    With a clear message that connects with your audience when they need it the most.
                </SubHeadline>

                <ButtonGroup
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <PrimaryButton href="#work">Our work</PrimaryButton>
                    <SecondaryButton href="#contact">Get Attention</SecondaryButton>
                </ButtonGroup>
            </HeroContainer>
        </Section>
    );
};

export default Hero;
