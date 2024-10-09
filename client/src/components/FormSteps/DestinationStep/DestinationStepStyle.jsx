import styled from 'styled-components'


export const Div = styled.div`
    width:100%;
    max-width: 1200px;
    margin: 0 auto;
`

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

export const InputBox = styled.div`
    display:flex;
    justify-content:center;
`

export const SubtitleDiv = styled.div`
    padding-top:0.6rem;
    padding-bottom:1rem;
    font-size:0.8rem;

    @media (min-width: 400px) {
      font-size:0.9rem;
    }

    @media (min-width: 600px) {
      font-size:1rem;
    }
`