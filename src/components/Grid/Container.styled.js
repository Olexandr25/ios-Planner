import styled, { css } from "styled-components"

export const ContainerStyled = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  /* box-sizing: border-box; */

  ${props =>
    props.variant === "container" &&
    css`
      @media (min-width: 576px) {
        max-width: 540px;
      }

      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }

      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}
    
    ${props =>
    props.variant === "container-sm" &&
    css`
      @media (min-width: 576px) {
        max-width: 540px;
      }

      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }

      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "container-md" &&
    css`
      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }

      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}
    
    ${props =>
    props.variant === "container-lg" &&
    css`
      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }

      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "container-xl" &&
    css`
      @media (min-width: 1200px) {
        max-width: 1140px;
      }

      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

    ${props =>
    props.variant === "container-xxl" &&
    css`
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}
`
