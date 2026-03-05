import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/layout';

const FooterWrapper = styled.footer`
  padding: 4rem 5%;
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.primaryBg};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: ${({ theme }) => theme.typography.heading};
  }
  p {
    color: #999;
    max-width: 300px;
    line-height: 1.6;
  }
`;

const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: #999;
    transition: color 0.3s;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryBg};
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterGrid>
                    <Brand>
                        <h2>WhiteMushroom</h2>
                        <p>Elevating brands through minimalist design and strategic execution.</p>
                    </Brand>
                    <LinksGroup>
                        <h3>Company</h3>
                        <a href="#about">About Us</a>
                        <a href="#process">How We Work</a>
                        <a href="#work">Our Work</a>
                    </LinksGroup>
                    <LinksGroup>
                        <h3>Connect</h3>
                        <a href="mailto:hello@whitemushroom.com">hello@whitemushroom.com</a>
                        <a href="#instagram">Instagram</a>
                        <a href="#linkedin">LinkedIn</a>
                    </LinksGroup>
                </FooterGrid>
                <BottomBar>
                    <p>&copy; {new Date().getFullYear()} WhiteMushroom Agency. All rights reserved.</p>
                    <p>Designed with precision.</p>
                </BottomBar>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
