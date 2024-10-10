import styled from 'styled-components'

export const Button = styled.button`
    border:none;
    box-shadow:none;
    width:40%;
    height:2.5rem;
    background:var(--primary);
    color:var(--white);
    border-radius:4px;
    text-space:2px;
    margin:0.4rem;
    cursor:pointer;

    @media (min-width: 400px) {
      width:40%;
    }

    @media (min-width: 600px) {
      width:30%;
    }
`

export const FormContainer = styled.div`
  max-width: 90%;
  max-height: 90%;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;

  @media (min-width: 400px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 7px;
  }

  @media (min-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--primary);
  text-align: left;

  @media (min-width: 400px) {
    font-size: 2rem;
  }

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`