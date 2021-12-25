import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue-default)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  gray: "var(--color-gray-darken-5)",
  secondary: "var(--color-gray-darken-4)",
}

const inputSizes = {
  xxsm: {
    lineHeight: "var(--line-height-xx-small)",
    fontSize: "var(--font-size-xx-small)",
  },
  xsm: {
    lineHeight: "var(--line-height-x-small)",
    fontSize: "var(--font-size-x-small)",
  },
  sm: {
    lineHeight: "var(--line-height-small)",
    fontSize: "var(--font-size-small)",
  },
  md: {
    lineHeight: "var(--line-height-medium)",
    fontSize: "var(--font-size-medium)",
  },
  lg: {
    lineHeight: "var(--line-height-large)",
    fontSize: "var(--font-size-large)",
  },
  xl: {
    lineHeight: "var(--line-height-x-large)",
    fontSize: "var(--font-size-x-large)",
  },
  xxl: {
    lineHeight: "var(--line-height-xx-large)",
    fontSize: "var(--font-size-xx-large)",
  },
  xxxl: {
    lineHeight: "var(--line-height-xxx-large)",
    fontSize: "var(--font-size-xxx-large)",
  },
}

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const IconPosition = styled.div`
  position: absolute;
  padding-left: var(--p-lg);
  padding-top: var(--p-sm);
`

export const InputIcon = styled.input`
  width: 100%;
  font-size: var(--font-size-x-small);
  line-height: var(--line-height-x-small);
  background-color: var(--color-gray-darken-1);
  outline: none;
  border-style: none;
  border: var(--b-lg) solid transparent;
  border-radius: var(--border-radius-lg);
  padding-left: var(--p-xxl);

  ${props =>
    props.size &&
    css`
      font-size: ${props => inputSizes[props.size].fontSize};
      line-height: ${props => inputSizes[props.size].lineHeight};
    `}

  &:focus {
    border: var(--b-lg) solid var(--color-blue-lighten);
  }

  &::-webkit-search-cancel-button {
    appearance: none;
    height: var(--cancel-md);
    width: var(--cancel-md);
    border-radius: var(--border-radius-round);
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
      no-repeat 50% 50%;
    background-size: contain;
  }
`

export const ClassicInput = styled.input`
  width: 100%;

  ${props =>
    props.size &&
    css`
      font-size: ${props => inputSizes[props.size].fontSize};
      line-height: ${props => inputSizes[props.size].lineHeight};
    `}
`
export const OutlinedInput = styled.input`
  width: 100%;
  border: var(--b-none);
  outline: none;

  ${props =>
    props.size &&
    css`
      font-size: ${props => inputSizes[props.size].fontSize};
      line-height: ${props => inputSizes[props.size].lineHeight};
    `}

  ${props => props.color && css`
    color: ${props => Colors[props.color]}
  `}
`
