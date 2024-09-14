import styled from 'styled-components'

export const Button = styled.button`
    border:none;
    box-shadow:none;
    width:20%;
    height:2.5rem;
    background:var(--primary);
    color:var(--white);
    border-radius:4px;
    text-space:2px;
    margin-top:1rem;
    margin-right:1rem;
    margin-lef:1rem;
    cursor:pointer;
`

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: #4CAF50; /* Custom primary color */
  text-align: center;
  margin-bottom: 20px;
`;