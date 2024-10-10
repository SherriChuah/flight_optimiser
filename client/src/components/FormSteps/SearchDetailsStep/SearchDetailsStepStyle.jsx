import styled from 'styled-components'


export const Heading = styled.h1`
    font-size:1.5rem;
    margin-bottom:1rem;
    margin-top:1rem;
    font-weight:1000;

    @media (min-width: 400px) {
      font-size:2rem;
    }

    @media (min-width: 600px) {
      font-size:3rem;
    }
`

export const Button = styled.button`
    border:none;
    box-shadow:none;
    width:40%;
    font-size:1rem;
    height:2rem;
    background:var(--gray);
    background-color:var(--blue);
    color: var(--white);
    border-radius:4px;
    text-space:2px;
    margin-right:1rem;
    margin-lef:1rem;
    cursor:pointer;

    @media (min-width: 400px) {
      width:30%;
    }

    @media (min-width: 600px) {
        width:20%;
    }
`
