import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue-default)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  gray: "var(--color-gray-darken-5)",
  secondary: "var(--color-gray-darken-4)",
  black: "var(--color-black)",
}

const btnSizes = {
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

const fontWeights = {
  regular: "var(--font-weight-regular)",
  medium: "var(--font-weight-medium)",
  semibold: "var(--font-weight-semibold)",
}

const borderRadiuses = {
  sm: "var(--border-radius-sm)",
  md: "var(--border-radius-md)",
  lg: "var(--border-radius-lg)",
  xl: "var(--border-radius-xl)",
  xxl: "var(--border-radius-xxl)",
  round: "var(--border-radius-round)",
  special: "4px",
}

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  padding: var(--p-md);
  cursor: pointer;
  font-size: var(--font-size-medium);
  line-height: var(--line-height-medium);
  color: ${props =>
    props.flagged ? "var(--color-orange)" : "var(--color-gray-darken-3)"};

  ${props =>
    props.color &&
    css`
      color: ${props => Colors[props.color]};
    `}

  ${props =>
    props.size &&
    css`
      font-size: ${props => btnSizes[props.size].fontSize};
      line-height: ${props => btnSizes[props.size].lineHeight};
    `}

  ${props =>
    props.fontWeight &&
    css`
      font-weight: ${props => fontWeights[props.fontWeight]};
    `}

  ${props =>
    props.borderRadius &&
    css`
      border-radius: ${props => borderRadiuses[props.borderRadius]};
    `}

  ${props =>
    props.borderType === "none" &&
    css`
      border: none;
    `}

  &:hover {
    background-color: ${props =>
      props.isHovered ? "var(--color-gray-default)" : null};
  }
  &:active {
    background: ${props =>
      props.isActive ? "var(--color-gray-darken-2)" : null};
  }
`
export const ButtonIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--m-none) var(--m-lg);
`
