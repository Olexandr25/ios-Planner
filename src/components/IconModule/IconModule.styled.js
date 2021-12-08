import styled from "styled-components"

export const IconStyled = styled.div`
  border-radius: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => (props.bgColor || "#337bf6")};
  color: #fff;
`
