import styled from "styled-components"

// const btnSize = { 
//   "sm" : {},
//   "lg" : {}
// }

// For 3 or more
// Ternarnyi for 2

export const ButtonWrapper = styled.button`
  display: flex;
  align-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 6px;
  padding: 4px;
  color: #4e4d4d;
  /* font-size: ${props => props.fs || null}; */
  /* font-size: btnSize[props.size] */
  &:hover {
    background-color: ${props => (props.isHover ? "#ebebeb" : null)};
  }
  &:active {
    background: ${props => (props.isActive ? "#ccc" : null)};
  }
`
export const ButtonIconWrapper = styled.div`
  margin-right: 8px;
`
