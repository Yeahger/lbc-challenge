import React, { useState } from 'react';
import styled from 'styled-components';
import type { Message as MessageType } from '../../types/Message';
import UserLogo from '../../assets/user.svg';

export default function Message({ type, username, text, date} : MessageType) {
  // Randomize user logo color
  const [logoColor] = useState('#' + Math.floor(Math.random()*16777215).toString(16));

  return (
    <MessageContainer>
      <Logo color={logoColor}><UserLogo /></Logo>
      <StyledMessage>
        <UserName>{username}</UserName>
        <Date>{date}</Date>
        <Text>{text}</Text>
      </StyledMessage>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  margin: 15px 0;
`;
const StyledMessage = styled.div`
  margin-left: 60px;
  padding: 15px;
    
  background-color: #FFF;
  box-shadow: 1px 1px 8px 1px #E6EBEF;
  border-radius: 5px;
`;

const Logo = styled.div`
  width: 50px;
  background-color: #FFF;
  
  fill: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 30px;
  
  float: left;
  overflow: hidden;
`;

const UserName = styled.div`
  font-weight: bold;
`;
const Date = styled.div`
  color: #B6B6B6;
  font-size: 12px;
  font-style: italic;
`;
const Text = styled.div`
  margin-top: 10px;
`;
