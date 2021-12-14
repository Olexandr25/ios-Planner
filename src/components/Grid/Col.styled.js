import styled from "styled-components"

export const ColStyled = styled.div`
  box-sizing: border-box;
  flex: ${(props) => (props.cw ? '0 0' : '1 0')};
  flex-basis: ${(props) => (props.cw / 12) * 100}%;
  height: inherit;

  @media (min-width: 576px) {
    flex-basis: ${(props) => {
      return props.xs ? `${(props.xs / 12) * 100}%` : null
    }};
  }
  @media (min-width: 768px) {
    flex-basis: ${(props) => {
      return props.sm ? `${(props.sm / 12) * 100}%` : null
    }};
  }
  @media (min-width: 992px) {
    flex-basis: ${(props) => {
      return props.md ? `${(props.md / 12) * 100}%` : null
    }};
  }
  @media (min-width: 1200px) {
    flex-basis: ${(props) => {
      return props.lg ? `${(props.lg / 12) * 100}%` : null
    }};
  }
  @media (min-width: 1400px) {
    flex-basis: ${(props) => {
      return props.xl ? `${(props.xl / 12) * 100}%` : null
    }};
  }
  @media (max-width: 576px) {
    flex-basis: ${(props) => {
      return props.xxl ? `${(props.xxl / 12) * 100}%` : null
    }};
  }
`