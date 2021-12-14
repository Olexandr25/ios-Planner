import styled, { css } from "styled-components"

export const ContainerStyled = styled.div`
  /* width: 100%; */
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  height: inherit;

  ${props =>
    props.variant === "container-fluid" &&
    css`
      padding-left: 12px;
      padding-right: 12px;
      margin-left: auto;
      margin-right: auto;
    `}

  ${props =>
    props.variant === "container" &&
    css`
      max-width: 100%;
      padding-left: 12px;
      padding-right: 12px;
      margin-left: auto;
      margin-right: auto;

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
      max-width: 100%;
      padding-left: 12px;
      padding-right: 12px;
      margin-left: auto;
      margin-right: auto;

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
      max-width: 100%;
      padding-left: 12px;
      padding-right: 12px;
      margin-left: auto;
      margin-right: auto;

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
      max-width: 100%;
      padding-left: 12px;
      padding-right: 12px;
      margin-left: auto;
      margin-right: auto;

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
      max-width: 100%;
      padding-left: 12px;
      padding-right: 12px;
      margin-left: auto;
      margin-right: auto;

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
      max-width: 100%;
      padding-left: 12px;
      padding-right: 12px;
      margin-left: auto;
      margin-right: auto;

      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}
`
