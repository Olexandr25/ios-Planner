import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const IconPosition = styled("icon")`
  position: absolute;
  padding-left: var(--p-lg);
  padding-top: var(--p-sm);
`

export const InputIcon = styled.input`
  width: 100%;
  font-size: var(--font-size-x-small);
  line-height: var(--line-height-x-small);
  background-color: var(--color-gray-default);
  border-style: none;
  border: var(--b-lg) solid transparent;
  border-radius: var(--border-radius-lg);
  /* padding: var(--p-md); */
  padding-left: var(--p-xxl);
  &:focus {
    border: var(--b-lg) solid var(--color-blue-default);
  }

  &::-webkit-search-cancel-button {
    appearance: none;
    height: var(--cancel-md);
    width: var(--cancel-md);
    border-radius: var(--border-radius-round);
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
      no-repeat 50% 50%;
    background-size: contain;
  }
`

export const ClassicInput = styled.input`
  width: 100%;
`
export const OutlinedInput = styled.input`
  width: 100%;
  border: var(--b-none);
  outline: none;
`
