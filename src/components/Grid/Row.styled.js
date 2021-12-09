import styled, { css } from "styled-components"

export const RowStyled = styled.div`
  --bs-gutter-x: 24px;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(---bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));

  & > * & {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  /* ${props =>
    props.variant === "row-cols-auto" &&
    css`
      & > * & {
        flex: 0 0 auto;
        width: auto;
      }
    `}

  ${props =>
    props.variant === "row-cols-1" &&
    css`
      & > * & {
        flex: 0 0 auto;
        width: 100%;
      }
    `}
  
  ${props =>
    props.variant === "row-cols-2" &&
    css`
      & > * & {
        flex: 0 0 auto;
        width: 50%;
      }
    `}
  
  ${props =>
    props.variant === "row-cols-3" &&
    css`
      & > * & {
        flex: 0 0 auto;
        width: 33.3333333333%;
      }
    `}
  
  ${props =>
    props.variant === "row-cols-4" &&
    css`
      & > * & {
        flex: 0 0 auto;
        width: 25%;
      }
    `}

  ${props =>
    props.variant === "row-cols-5" &&
    css`
      & > * & {
        flex: 0 0 auto;
        width: 20%;
      }
    `}
  
  ${props =>
    props.variant === "row-cols-6" &&
    css`
      & > * & {
        flex: 0 0 auto;
        width: 16.6666666667%;
      }
    `}

    ${props =>
    props.gutter === "g-0" &&
    css`
      --bs-gutter-x: 0;
      --bs-gutter-y: 0;
    `}

    ${props =>
    props.gutter === "g-1" &&
    css`
      --bs-gutter-x: 4px;
      --bs-gutter-y: 4px;
    `}

    ${props =>
    props.gutter === "g-2" &&
    css`
      --bs-gutter-x: 8px;
      --bs-gutter-y: 8px;
    `}

    ${props =>
    props.gutter === "g-3" &&
    css`
      --bs-gutter-x: 16px;
      --bs-gutter-y: 16px;
    `}

    ${props =>
    props.gutter === "g-4" &&
    css`
      --bs-gutter-x: 24px;
      --bs-gutter-y: 24px;
    `}

    ${props =>
    props.gutter === "g-5" &&
    css`
      --bs-gutter-x: 48px;
      --bs-gutter-y: 48px;
    `} */
`
