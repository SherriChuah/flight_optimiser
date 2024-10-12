import styled from 'styled-components'

export const BigDiv = styled.div`  
    text-align: justify;
    border: 1px solid black;
    padding:1rem;
    display:flex;
    flex-wrap: wrap;

    @media (min-width: 400px) {
    }

    @media (min-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const Div = styled.div`
    float: left;   
    margin: 1px;   
    text-align: left;
    border: 1px solid black;
    padding: 10px; 
    width: 100%;
`

export const Heading = styled.h1`
    font-size:1rem;
    margin-top: 0;

    @media (min-width: 400px) {
        font-size:1.2rem;
    }

    @media (min-width: 600px) {
        font-size:1.5rem;
    }
`

export const Para = styled.p`
    font-size:0.7rem;
    margin:0px;

    @media (min-width: 400px) {
        font-size:0.85rem;
    }

    @media (min-width: 600px) {
        font-size:1rem;
    }
`
