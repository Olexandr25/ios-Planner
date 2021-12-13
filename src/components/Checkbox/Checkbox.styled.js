import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
}

const Sizes = {
  sm: "var(--checkbox-sm)",
  lg: "var(--checkbox-lg)",
}

export const CheckboxStyled = styled.input.attrs({ type: "checkbox" })`
  display: flex;
  width: var(--checkbox-md);
  height: var(--checkbox-md);
  border: var(--b-sm) solid var(--color-gray-darken-4);
  padding: var(--p-md);
  border-radius: var(--border-radius-round);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  ${props =>
    props.size &&
    css`
      width: ${props => Sizes[props.size]};
      height: ${props => Sizes[props.size]};
    `}

  &:checked {
    background-color: blue;
    background-clip: content-box;

    ${props =>
      props.bgColor &&
      css`
        background-color: ${props => Colors[props.bgColor]};
        border: 1px solid ${props => Colors[props.bgColor]};
      `}
  }
`
