import styled from "styled-components"

export const CategoryCombinedStyled = styled.form`
  width: inherit;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--p-lg) var(--p-md);

  &:focus {
    border-radius: var(--border-radius-md);
    background-color: var(--color-blue-lighten);
  }
`

export const CategoryLeft = styled.div`
  display: flex;
  width: inherit;
`

export const CategoryRight = styled.div`
  display: flex;
  align-items: center;
`
