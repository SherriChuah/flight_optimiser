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

export const Button = styled.button`
  background-color: #4B0066;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  height: 20%;
  margin-bottom: 10px;
`;

export const FormStyle = styled.div`
    width: 400px;  // You can adjust this size as needed
    padding: 20px;
    background-color: white;
    borderRadius: 8px;
    boxShadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    zIndex: 1001;  // Ensure the modal is above the overlay
`

export const PopUpStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopUpInnerStyle = styled.div`
    position: relative;
    padding: 32px;
    width: 60%;
    height: 70%;
    background-color: var(--white);
`