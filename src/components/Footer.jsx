import React from 'react';
import styled from 'styled-components';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import GitHubLogo from '../assets/github.svg';
import colors from '../utils/colors';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Navbar expand="md">
          <NavbarBrand href="https://www.leboncoin.fr/">leboncoin</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <StyledNavLink href="https://github.com/Yeahger/lbc-challenge">
                  <StyledGitHubLogo />
                  Code source
                </StyledNavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${colors.dark.gray};
  
  a {
    color: ${colors.normal.white};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledGitHubLogo = styled(GitHubLogo)`
  position: absolute;
  top: 4px;
  left: -2em;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  
  &:hover > ${StyledGitHubLogo} {
    opacity: 0.5;
  }
`;
