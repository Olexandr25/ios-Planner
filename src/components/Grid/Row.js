import { RowStyled } from "./Row.styled"

const Row = props => {
  const { children, className } = props

  return <RowStyled className={className}>{children}</RowStyled>
}

export default Row
