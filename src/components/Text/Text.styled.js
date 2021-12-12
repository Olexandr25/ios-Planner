import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue-default)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  gray: "var(--color-gray-darken-5)",
  secondary: "var(--color-gray-darken-4)",
}

const textSizes = {
  xxsm: {lineHeight: "var(--line-height-xx-small)", fontSize: "var(--font-size-xx-small)"},
  xsm: {lineHeight: "var(--line-height-x-small)", fontSize: "var(--font-size-x-small)"},
  sm: {lineHeight: "var(--line-height-small)", fontSize: "var(--font-size-small)"},
  md: {lineHeight: "var(--line-height-medium)", fontSize: "var(--font-size-medium)"},
  lg: {lineHeight: "var(--line-height-large)", fontSize: "var(--font-size-large)"},
  xl: {lineHeight: "var(--line-height-x-large)", fontSize: "var(--font-size-x-large)"},
  xxl: {lineHeight: "var(--line-height-xx-large)", fontSize: "var(--font-size-xx-large)"},
  xxxl: {lineHeight: "var(--line-height-xxx-large)", fontSize: "var(--font-size-xxx-large)"},
}

const fontWeights = {
  regular: "var(--font-weight-regular)",
  medium: "var(--font-weight-medium)",
  semibold: "var(--font-weight-semibold)"
}

export const TextStyled = styled.div`
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
  font-weight: var(--font-weight-regular);

  ${props => 
  props.color && css`
    color: ${props => Colors[props.color]};
  `}

  ${props => 
  props.size && css`
    font-size: ${props => textSizes[props.size].fontSize};
    line-height: ${props => textSizes[props.size].lineHeight};
  `}

  ${props => 
  props.fontWeight && css`
    font-weight: ${props => fontWeights[props.fontWeight]};
  `}
`
