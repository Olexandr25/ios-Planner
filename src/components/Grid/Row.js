import { RowStyled } from "./Row.styled"

const Row = props => {
  const { children, variant, gutter } = props

  return (
    <RowStyled variant={variant} gutter={gutter}>
      {children}
    </RowStyled>
  )
}

export default Row
