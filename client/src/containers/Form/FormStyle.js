import styled from 'styled-components'

export const Heading = styled.div`
    flex-direction: column;
    align-items:center;
    padding-block:1rem;
`

export const Title = styled.p`
        font-size:1rem;
        margin-bottom:10px;
        font-weight:1000;
`
export const SubTitle = styled.p`
        font-size:1rem;
`

export const Button = styled.button`
    border:none;
    box-shadow:none;
    width:50%;
    height:2.5rem;
    background:var(--primary);
    color:var(--white);
    border-radius:4px;
    text-space:2px;
    margin-top:1rem;
    cursor:pointer;
`

export const CustomForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Success = styled.div`
    height:3rem;
    width:3rem;
    border-radius:50%;
    background:var(--primary);
    color:var(--white);
    font-size:1.5rem;
    margin-top:4rem;
`
