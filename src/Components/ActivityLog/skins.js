import styled from 'styled-components';

export const UserTableWrapper = styled.div`
  width: 60%;
  margin: auto;
  min-height: calc(90vh - 90px);
  @media (max-width: 768px) {
    width: 90vw;
    overflow-x: scroll;
  }
`;

export const UserTable = styled.div`
  border: 1px solid black;
  margin: 20px;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const TableHead = styled.div`
  display: flex;
  > p {
    text-align: center;
    width: 100%;
  }
  ${(props) => props.hover && `&:hover {
    background: #9da1b9;
    font-weight: bold;
    cursor: pointer;
  }`}
`;

export const TableRow = styled.div`
border: 1px solid black;
padding: 20px;
  &:first-child {
    width: 10%;
  }
  &:last-child {
    width: 90%;
  }
  @media (max-width: 768px) {
    &:first-child {
      width: 30%;
    }
    &:last-child {
      width: 70%;
    }
  }
`;

export const LoaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000007d;
`;

export const ModalWrapper = styled.div`
  padding: 20px;
`;

export const TextWrapper = styled.p`
  text-align: center;
  > span {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ModalInputlabel = styled.p`
  font-weight: bold;
`;

export const ModalInput = styled.input`
  width: 40%;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #c8d0ef;
  background-color: #ffffff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ModalTableRow = styled.div`
  padding: 20px;
  border: 1px solid black;
    &:nth-child(n+1){
      width: 42%;
    }
    &:first-child {
      width: 10%;
    }
    @media (max-width: 768px) {
      padding: 12px 2px;
      &:nth-child(n+1){
        width: 42%;
      }
      &:first-child {
        width: 20%;
      }
    }
`;

export const ButtonWrapper = styled.div`
  margin: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled.button`
  font-weight: 600;
  border: none;
  background: #9da1b9;
  cursor: pointer;
  padding: 8px 12px;
`;