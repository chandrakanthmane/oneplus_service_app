// Modal.js
import React from 'react';
import styled from 'styled-components';

const Modal = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Message>{message}</Message>
        <Button onClick={onClose}>Login</Button>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Message = styled.p`
  margin-bottom: 20px;
  font-size: 1.2em;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #218838;
  }
`;
