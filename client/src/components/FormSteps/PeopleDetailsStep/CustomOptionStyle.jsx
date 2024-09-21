import styled from 'styled-components'

export const MainDiv = styled.div`
    align-items:center;
    padding-block:1rem;
    padding:8px;
    display:flex;
    border:1px solid;
    width:100%;

`

export const RightDiv = styled.div`
    margin-left:5px;
    margin-right:16px;
    width:100%
`

export const AirportLocationDetailsDiv = styled.div`
    padding-top:${props => props.type == 'topRow' ? '10px' : '0px'};
    padding-bottom:${props => props.type == 'topRow' ? '0px' : '10px'};
    text-align:left;
`

export const Span = styled.span`
    font-weight:${props => props.part.highlight ? 700 : 400};
    font-size:${props => props.type == 'airportNameIATA' ? '14px' : '11px'};
    background-color:${props => props.part.highlight ? '#ffff00' : 'transparent'};
`
