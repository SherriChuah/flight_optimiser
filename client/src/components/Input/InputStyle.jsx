import styled from 'styled-components'


export const Label = styled.label`
    display:block;
    font-size:14px;
    margin-bottom: 0.5rem;
    width:100%;
`

export const CustomInput = styled.input`
    border:2px solid var(--gray);
    border-radius:4px;
    height:2.8rem;
    width:100%;
    box-sizing: border-box;
    padding-inline:0.8rem;
    &:active, &:focus {
        outline:2px solid var(--primary);
    }
`

export const InputWrapper = styled.div`
    width:100%;
    margin-top:2rem; 
    margin-bottom:3rem; 
    padding-left:30vw;
    padding-right:30vw;
`

export const CustomCheck = styled.div`
    border:2px solid ${({ active }) => active ? 'var(--primary)' : 'var(--gray)'};
    box-sizing:border-box;
    margin-block:1rem;
    padding:0.8rem 1rem;
    width:23%;
    display:flex;
    border-radius:8px;
    flex-direction:column;
    &:hover {
        cursor:pointer;
    }
    & .heading {
        font-size:18px;
        margin-bottom: 0.3rem;
        font-weight:800;
    }
    & .sub-heading {
        font-size:14px;
    }
    &:nth-child(1){
        margin-right:2rem;
    }
`


export const LogoImg = styled.img`
    width:1.3rem;
    content-fit:cover;
`