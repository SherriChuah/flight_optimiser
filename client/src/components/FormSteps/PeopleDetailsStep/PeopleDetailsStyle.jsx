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

export const ButtonContainer = styled.div`
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
  background-color: var(--primary);
  color: var(--white);
  border: none;
  padding: 5px 15px;
  cursor: pointer;
  height: 20%;
  margin: 10px;
  border-radius: 4px;
`;

export const Submit = styled.input`
  background-color: var(--primary);
  color: var(--white);
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  height: 20%;
  margin: 10px;
  border-radius: 4px;
`;

export const Cancel = styled.button`
  background-color: var(--gray);
  color: var(--black);
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  height: 20%;
  margin: 10px;
  border-radius: 4px;
  
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
    border-radius: 4px;
`

export const PopUpTitle = styled.h1`
  font-size: 2rem;
  color: var(--primary);
  text-align: left;
  margin-left: 25px;
  margin-right: 25px;
  padding-top: 5px;
`

export const Input = styled.input`
  width: 90%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 14px;
`

export const Select = styled.select`
  width: 90%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 14px;
`

export const FourColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  padding-left: 5%;
  padding-right: 5%;
`

export const SplitSelect = styled.select`
  width: 49%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 14px;
`

export const Label = styled.label`
  margin: 40px;
`


export const Center = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 10px;
`

export const Error = styled.p`
  color: red;
  font-size: 10px;
  font-family: 'Inter, sans-serif
`
export const DirectIndirectDiv = styled.div`
  padding-top: 15px;
`

export const ButtonGroupDiv = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%; /* Move to the center horizontally */
  transform: translateX(-50%);
  
`