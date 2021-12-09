import { ColStyled } from "./Col.styled"

const Col = props => {
  const { children, variant, className } = props

  return (
    <ColStyled variant={variant} className={className}>
      {children}
    </ColStyled>
  )
}

export default Col
