import styled from "styled-components"

export const IconStyled = styled.div`
  border-radius: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor || "var(--color-blue-default)")};
  color: var(--color-white);
`
