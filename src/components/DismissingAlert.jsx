import React  from 'react';
import { Alert } from 'reactstrap';

const DismissingAlert = ({
  isVisible, color, text, handleDismiss,
}) => {
  const onDismiss = () => handleDismiss();
  return <Alert color={color} isOpen={isVisible} toggle={onDismiss}>{text}</Alert>;
};

export default DismissingAlert;
