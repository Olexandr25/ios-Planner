import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue-default)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  gray: "var(--color-gray-darken-5)",
  secondary: "var(--color-gray-darken-4)",
}

export const Wrapper = styled.div`
  padding: var(--p-md);
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-xl);
  padding: var(--p-lg);
  font-weight: var(--font-weight-semibold);
  background-color: var(--color-gray-darken-1);
  color: var(--color-gray-darken-5);

  ${props =>
    props.color &&
    css`
      color: ${props => Colors[props.color]};
    `}

  &:active {
    background-color: var(--color-gray-darken-5);
    color: ${props => props.color || "var(--color-white)"};
  }
`

export const Header = styled.div`
  display: flex;
  margin-bottom: var(--m-md);
`

