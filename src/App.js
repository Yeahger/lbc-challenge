import React from 'react';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Messages from './components/message/MessagesContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import MessageForm from './components/message/MessageFormContainer';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Container>
        <Messages />
        <MessageForm />
      </Container>
      <Footer />
    </Provider>
  );
}

