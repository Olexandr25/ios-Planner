import styled from "styled-components"

export const Body = styled.div`
  font-size: ${props => props.fs || "inherit"};
  font-weight: ${props => props.fw || "normal"};
  color: ${props => props.color || "#000"};
`
