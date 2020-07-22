import styled from 'styled-components';

export const CloseIcon = styled.div`
  font-size: 14px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  &:after {
    content: 'X';
  }
`;

export const ModalCon = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #0000007d;
  z-index: 102;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 12%;
  left: 0px;
  right: 0px;
  width: 60%;
  margin: auto;
  border: 1px solid rgb(204, 204, 204);
  background: #fff;
  outline: none;
  padding: 16px 16px 8px;
  min-height: 52px;
  max-height: 96vh;
  @media (max-width: 768px) {
    width: 90%;
  }
`;