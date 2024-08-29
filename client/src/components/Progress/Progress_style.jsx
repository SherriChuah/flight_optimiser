import styled from 'styled-components'

export const ChildProgress = styled.div`
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        font-size:12px;
        color: ${({ accomplished }) => accomplished ? "var(--white)" : "var(--black)"};
        background: ${({ accomplished }) => accomplished ? "var(--primary)" : "var(--gray)"};
        font-weight:600;
        & .white-bg {
            background: ${({ accomplished }) => accomplished ? "var(--primary)" : "var(--white)"};  
            height:100%;
            width:100%;
            border:1px solid var(--gray);
            border-radius:50%;
            font-size:12px;
            font-weight:600;
        }

`


