import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const IconPosition = styled("Icon")`
  position: absolute;
  padding-left: 8px;
  padding-top: 2px;
`

export const InputIcon = styled.input`
  background-color: #e1e1e2;
  border-style: none;
  border-radius: 8px;
  border: 0;
  padding: 8px;
  padding-left: 30px;
  width: 100%;
  border: 3px solid transparent;
  &:focus {
      border: 3px solid #337bf6;
  }
`

export const ClassicInput = styled.input`
  width: 100%;
`
export const OutlinedInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
`
