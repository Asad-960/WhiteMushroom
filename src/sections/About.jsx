import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionHeading } from '../components/layout';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContentBox = styled(motion.div)`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.secondaryText};
    margin-bottom: 2rem;
  }
`;

const ImageBox = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
`;

const About = () => {
    return (
        <Section id="about" bg="secondary">
            <Container>
                <Grid>
                    <ContentBox
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <SectionHeading align="left">About WhiteMushroom</SectionHeading>
                        <p>
                            We are a team of three passionate professionals dedicated to building exceptional digital experiences. As a minimalist agency, we focus on what truly matters: clear communication, stunning design, and flawless execution.
                        </p>
                        <p>
                            Our process is streamlined by having an experienced Sales Manager, a dedicated Product/Account Manager, and a Lead Developer ensuring every project is delivered to the highest standards.
                        </p>
                    </ContentBox>
                    <ImageBox
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        {/* Placeholder for an agency image or abstract graphic */}
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)' }}></div>
                    </ImageBox>
                </Grid>
            </Container>
        </Section>
    );
};

export default About;
