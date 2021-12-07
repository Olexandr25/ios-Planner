import styled from "styled-components"

export const Btn = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 6px;
  padding: 4px;
  color: #4e4d4d;
  font-size: ${props => props.fs || null};
  height: ${props => props.height || null};
  width: ${props => props.width || null};
  &:hover {
    background-color: ${props => (props.hover ? "#ebebeb" : null)};
  }
  &:active {
    background: ${props => (props.active ? "#ccc" : null)};
  }
`
export const TextWrapper = styled.div`
  margin-left: 8px;
`
