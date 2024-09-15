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
  max-width: 90%;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: left;
  margin-bottom: 20px;
  padding-top: 20px;
`