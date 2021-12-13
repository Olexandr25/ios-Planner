import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue-default)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  gray: "var(--color-gray-darken-5)",
  secondary: "var(--color-gray-darken-4)",
}

export const IconStyled = styled.div`
  border-radius: var(--border-radius-round);
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor || "var(--color-blue-default)"};
  color: var(--color-white);

  ${props =>
    props.color &&
    css`
      color: ${props => Colors[props.color]};
    `}
`
