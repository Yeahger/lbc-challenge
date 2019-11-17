import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Input } from 'reactstrap';
import Message from '../message/Message';
import { MessagesFilters } from '../../store/actions/messagesFilter';

type Props = {
  dataReceived: boolean,
  getMessages: Function,
  messages: Array<Message>;
  setVisibilityFilter: Function,
};

export default function Messages({
 getMessages, dataReceived, messages, setVisibilityFilter,
} : Props) {
  useEffect(() => {
    if (!dataReceived) {
      getMessages();
    }
  });

  return (
    <MessagesContainer>
      { messages.length > 0 ? (
        <div>
          <StyledRow noGutters>
            <Col md={4}>
              <Input type="select" onChange={(event) => setVisibilityFilter(event.target.value)}>
                <option value={MessagesFilters.SHOW_ALL}>Tous les messages</option>
                <option value={MessagesFilters.SHOW_PUBLIC}>Publics</option>
                <option value={MessagesFilters.SHOW_PRIVATE}>Privés</option>
              </Input>
            </Col>
          </StyledRow>
          <Title>Commentaires sur le produit "Chaussures de sécurité"</Title>
          { messages.map(message => (<Message key={message.id} {...message} />)) }
        </div>
      ) : <div>Aucun message</div> }
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  margin: 20px 0;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 22px;
`;

const StyledRow = styled(Row)`
  justify-content: flex-end;
`;
