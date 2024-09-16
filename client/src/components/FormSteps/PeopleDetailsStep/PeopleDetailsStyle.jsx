import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: Arial, sans-serif;
`;

export const Th = styled.th`
  background-color: #C3A6DC;
  color: #3F2063;
  padding: 10px;
  border: 1px solid #5A3F86;
  text-align: left;
`;

export const Td = styled.td`
  padding: 8px;
  border: 1px solid #5A3F86;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #F4EFFA;
  }
`;

export const ButtonContainer = styled.td`
  text-align: center;
`;

export const EditButton = styled.button`
  background-color: #7962A7;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  text-align: center;
`;

export const DeleteButton = styled.button`
  background-color: #4B0066;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;