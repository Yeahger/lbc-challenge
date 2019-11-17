import React from 'react';
import { Container } from 'reactstrap';
import Message from './components/Message';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Message />
      </Container>
    </div>
  );
}

export default App;
