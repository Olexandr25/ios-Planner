import { ColStyled } from "./Col.styled"

const Col = props => {
  const { children, variant, ...rest } = props

  return (
    <ColStyled data-testid="col" variant={variant} {...rest}>
      {children}
    </ColStyled>
  )
}

export default Col
