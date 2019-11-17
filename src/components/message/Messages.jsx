import React, { useEffect } from 'react';
import Message from '../message/Message';

type Props = {
  dataReceived: boolean,
  getMessages: Function,
  messages: Array<Message>;
};

export default function Messages({ getMessages, dataReceived, messages } : Props) {
  useEffect(() => {
    if (!dataReceived) {
      getMessages();
    }
  });

  return messages.length > 0 ? (
      messages.map(message => (
        <Message key={message.id} {...message} />
      ))
  ) : <div>Aucun message</div>;
};