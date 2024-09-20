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
    padding: 20px;
    width: 60%;
    height: 70%;
    background-color: var(--white);
`

export const PopUpTitle = styled.h1`
  font-size: 2rem;
  color: var(--primary);
  text-align: left;
  margin-bottom: 20px;
  margin-left: 25px;
  margin-right: 25px;
  padding-top: 5px;
`

export const Input = styled.input`
  width: 90%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const Select = styled.select`
  width: 90%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const TwoColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  margin-left: 25px;
  margin-right: 25px;
`

export const SplitSelect = styled.select`
  width: 49%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`
