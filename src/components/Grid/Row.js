import { RowStyled } from "./Row.styled"

const Row = props => {
  const { children, className } = props

  return (
    <RowStyled data-testid="row" className={className}>
      {children}
    </RowStyled>
  )
}

export default Row
