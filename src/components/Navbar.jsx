import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.85);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondaryText};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryText};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ContactButton = styled.a`
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 30px;
  font-weight: 600;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.02);
    background-color: #000;
  }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo>WhiteMushroom</Logo>
            <NavLinks>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#process">How We Work</a>
            </NavLinks>
            <ContactButton href="#contact">Contact Us</ContactButton>
        </Nav>
    );
};

export default Navbar;
