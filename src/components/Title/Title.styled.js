import styled from "styled-components"

export const Body = styled.h1`
  font-size: ${props => props.fs || "inherit"};
  font-weight: ${props => props.fw || "normal"};
  color: ${props => props.color || "#000"};
  padding: 0;
  margin: 0;
`
