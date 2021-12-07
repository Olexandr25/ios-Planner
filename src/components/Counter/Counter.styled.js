import styled from "styled-components";

export const Item = styled.div`
    font-size: ${props => props.fs ? props.fs : "24px"};
    font-weight: ${props => props.fw ? props.fw : "normal"};
    color: ${props => props.color ? props.color : "black"};
`