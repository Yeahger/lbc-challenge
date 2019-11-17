import React, { useState } from 'react';
import styled from 'styled-components';
import type { Message as MessageType } from '../../types/Message';
import UserLogo from '../../assets/user.svg';
import publicLogo from '../../assets/icons/users.png';
import privateLogo from '../../assets/icons/user-secret.png';
import colors from '../../utils/colors';

export default function Message({ isPublic, username, text, date} : MessageType) {
  // Randomize user logo color
  const [logoColor] = useState('#' + Math.floor(Math.random()*16777215).toString(16));

  return (
    <MessageContainer>
      <Logo color={logoColor}><UserLogo /></Logo>
      <StyledMessage>
        <Visibility>
          <img
            src={isPublic ? publicLogo : privateLogo }
            title={isPublic ? "Public" : "Privé"}
            alt="Visibilité"
          />
        </Visibility>
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
    
  background-color: ${colors.normal.white};
  box-shadow: 1px 1px 8px 1px ${colors.shadow.light};
  border-radius: 5px;
`;

const Logo = styled.div`
  width: 50px;
  background-color: ${colors.normal.white};
  
  fill: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 30px;
  
  float: left;
  overflow: hidden;
`;

const Visibility = styled.div`
  float: right;
  opacity: 0.15;
  cursor: pointer;
`;
const UserName = styled.div`
  font-weight: bold;
`;
const Date = styled.div`
  color: ${colors.normal.gray};
  font-size: 12px;
  font-style: italic;
`;
const Text = styled.div`
  margin-top: 10px;
`;
