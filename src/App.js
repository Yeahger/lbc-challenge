import React from 'react';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Messages from './components/message/MessagesContainer';
import Header from './components/Header';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Container>
        <Messages />
      </Container>
    </Provider>
  );
}

export default App;
