import styled from "styled-components"

export const CategoryCombinedStyled = styled.div`
  width: inherit;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--p-lg) var(--p-md);

  &:focus {
    border-radius: 4px;
    background-color: var(--color-blue-lighten);
  }
`

export const CategoryLeft = styled.div`
  display: flex;
  width: inherit;
`

export const CategoryRight = styled.div`
  display: flex;
`