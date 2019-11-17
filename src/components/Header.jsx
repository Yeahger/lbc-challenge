import React from 'react';
import styled from 'styled-components';
import { Container, Navbar } from 'reactstrap';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <StyledHeader>
      <Navbar light expand="md">
        <Container>
          <a href="/">
            <img src={logo} alt="Logo" width="150" />
          </a>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin-bottom: 20px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
`;
