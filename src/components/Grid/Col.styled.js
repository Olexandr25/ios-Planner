import styled, { css } from "styled-components"

export const ColStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0%;
  height: inherit;

  ${props =>
    props.variant === "col-auto" &&
    css`
      flex: 0 0 auto;
      width: auto;
    `}

  ${props =>
    props.variant === "col-1" &&
    css`
      flex: 0 0 auto;
      width: 8.33333333%;
    `}

    ${props =>
    props.variant === "col-2" &&
    css`
      flex: 0 0 auto;
      width: 16.66666667%;
    `}

    ${props =>
    props.variant === "col-3" &&
    css`
      flex: 0 0 auto;
      width: 25%;
    `}

    ${props =>
    props.variant === "col-4" &&
    css`
      flex: 0 0 auto;
      width: 33.33333333%;
    `}

    ${props =>
    props.variant === "col-5" &&
    css`
      flex: 0 0 auto;
      width: 41.66666667%;
    `}

    ${props =>
    props.variant === "col-6" &&
    css`
      flex: 0 0 auto;
      width: 50%;
    `}

    ${props =>
    props.variant === "col-7" &&
    css`
      flex: 0 0 auto;
      width: 58.33333333%;
    `}

    ${props =>
    props.variant === "col-8" &&
    css`
      flex: 0 0 auto;
      width: 66.66666667%;
    `}

    ${props =>
    props.variant === "col-9" &&
    css`
      flex: 0 0 auto;
      width: 75%;
    `}

    ${props =>
    props.variant === "col-10" &&
    css`
      flex: 0 0 auto;
      width: 83.33333333%;
    `}

    ${props =>
    props.variant === "col-11" &&
    css`
      flex: 0 0 auto;
      width: 91.66666667%;
    `}

    ${props =>
    props.variant === "col-12" &&
    css`
      flex: 0 0 auto;
      width: 100%;
    `}
`
