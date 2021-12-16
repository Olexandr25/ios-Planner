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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue-default);
  color: var(--color-white);
  font-size: var(--font-size-x-small);
  padding: var(--p-md);
  max-height: 22px;

  ${props =>
    props.bgColor &&
    css`
      background-color: ${props => Colors[props.bgColor]};
    `}

  ${props =>
    props.color &&
    css`
      color: ${props => Colors[props.color]};
    `}
`
