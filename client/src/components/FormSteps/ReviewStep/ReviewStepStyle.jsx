import styled from 'styled-components'

export const BigDiv = styled.div`
    // // float: left;      
    // // width: 200px;     
    margin: 1px;   
    text-align: justify;
    border: 1px solid black;
    padding: 10px;
    padding:1rem;
    display:block;

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
    text-align: center;
    border: 1px solid black;
    padding: 10px; 
    
`

export const Heading = styled.h2`
    font-size:1.2rem;
`