import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px 5%;
  background-color: ${({ theme, bg }) => bg === 'secondary' ? theme.colors.secondaryBg : theme.colors.primaryBg};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: ${({ align }) => align || 'left'};
`;

const SectionHeading = ({ children, bg, align }) => {
  return (
    <Title align={align}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </Title>
  );
};

export { Section, Container, SectionHeading };
