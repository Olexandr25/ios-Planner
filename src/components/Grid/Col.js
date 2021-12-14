import { ColStyled } from "./Col.styled"

const Col = props => {
  const { children, ...rest } = props

  return (
    <ColStyled data-testid="col" {...rest}>
      {children}
    </ColStyled>
  )
}

export default Col
