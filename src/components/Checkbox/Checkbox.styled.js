import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
}

export const CheckboxWrapper = styled.input.attrs({ type: "checkbox" })`
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: orange;
    color: black;
    padding: 2px;
    border: red;
  }
`

export const LabelWrapper = styled.label``
