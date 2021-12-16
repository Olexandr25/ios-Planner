import styled, { css } from "styled-components"

const Colors = {
  blue: "var(--color-blue-default)",
  red: "var(--color-red)",
  orange: "var(--color-orange)",
  gray: "var(--color-gray-darken-5)",
  secondary: "var(--color-gray-darken-4)",
}

const levelTitle = {
  2: {
    lineHeight: "var(--line-height-x-large)",
    fontSize: "var(--font-size-x-large)",
  },
  3: {
    lineHeight: "var(--line-height-large)",
    fontSize: "var(--font-size-large)",
  },
  4: {
    lineHeight: "var(--line-height-medium)",
    fontSize: "var(--font-size-medium)",
  },
  5: {
    lineHeight: "var(--line-height-small)",
    fontSize: "var(--font-size-small)",
  },
}

export const TitleStyled = styled.div`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-xx-large);
  line-height: var(--line-height-xx-large);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${props =>
    props.level &&
    css`
      font-size: ${props => levelTitle[props.level].fontSize};
      line-height: ${props => levelTitle[props.level].lineHeight};
    `}

  ${props =>
    props.color &&
    css`
      color: ${props => Colors[props.color]};
    `}
`
