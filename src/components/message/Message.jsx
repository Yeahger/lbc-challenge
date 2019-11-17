import React from 'react';
import type { Message as MessageType } from '../../types/Message';

export default function Message({ type, text} : MessageType) {
  return (
    <div>{text}</div>
  );
};