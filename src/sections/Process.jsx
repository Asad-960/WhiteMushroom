import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, SectionHeading } from '../components/layout';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.primaryBg};
  padding: 3rem 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.06);
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  p {
    color: ${({ theme }) => theme.colors.secondaryText};
    line-height: 1.6;
  }
`;

const Process = () => {
    const steps = [
        { title: '1. Discovery', desc: 'Understanding your brand, goals, and audience.' },
        { title: '2. Strategy', desc: 'Crafting a roadmap tailored to your objective.' },
        { title: '3. Design', desc: 'Developing a visual language that speaks volumes.' },
        { title: '4. Development', desc: 'Building scalable and rock-solid solutions.' },
        { title: '5. Launch', desc: 'Deploying the final product to the world.' },
        { title: '6. Support', desc: 'Ongoing maintenance to ensure peak performance.' },
    ];

    return (
        <Section id="process">
            <Container>
                <SectionHeading align="center">How We Work</SectionHeading>
                <Grid>
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default Process;
