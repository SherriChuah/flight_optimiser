import styled from 'styled-components'

export const MainDiv = styled.div`
    align-items:center;
    padding-block:1rem;
    padding:5px;
    display:flex;
    border:1px solid;
    width:100%;
`

export const LeftDiv = styled.div`
    margin-left:6px;
    margin-right:9px;

    @media (min-width: 600px) {
        margin-left:10px;
        margin-right:15px;
    }
`

export const Image = styled.img`
    width:17px;
    height:17px;

    @media (min-width: 400px) {
        width:25px;
        height:25px;
    }

    @media (min-width: 600px) {
        width:30px;
        height:30px;
    }
`

export const RightDiv = styled.div`
    margin-left:3px;    
    width:100%

    @media (min-width: 400px) {
        margin-right:6px;
    }
`

export const AirportLocationDetailsDiv = styled.div`
    padding-top:${props => props.type == 'topRow' ? '1px' : '0px'};
    padding-bottom:${props => props.type == 'topRow' ? '0px' : '1px'};
    text-align:left;

    @media (min-width: 600px) {
        padding-top:${props => props.type == 'topRow' ? '10px' : '0px'};
        padding-bottom:${props => props.type == 'topRow' ? '0px' : '10px'};
        text-align:left;
    }
`

export const Span = styled.span`
    font-weight:${props => props.part.highlight ? 700 : 400};
    font-size:${props => props.type == 'airportNameIATA' ? '11px' : '10px'};
    background-color:${props => props.part.highlight ? '#ffff00' : 'transparent'};

    @media (min-width: 400px) {
        font-size:${props => props.type == 'airportNameIATA' ? '13px' : '11px'};
    }

    @media (min-width: 600px) {
        font-size:${props => props.type == 'airportNameIATA' ? '15px' : '12px'};
    }
`
