import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Messages from './components/message/MessagesContainer';
import Header from './components/Header';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Container>
        <Title>Commentaires sur le produit "Chaussures de sécurité"</Title>
        <Messages />
      </Container>
    </Provider>
  );
}

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 22px;
`;