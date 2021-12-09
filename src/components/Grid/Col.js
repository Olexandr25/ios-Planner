import { ColStyled } from "./Col.styled"

const Col = props => {
  const { children, variant } = props

  return <ColStyled variant={variant}>{children}</ColStyled>
}

export default Col
