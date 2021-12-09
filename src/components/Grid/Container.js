import { ContainerStyled } from "./Container.styled"

const Container = props => {
  const { children, variant, className } = props

  return (
    <ContainerStyled variant={variant} className={className}>
      {children}
    </ContainerStyled>
  )
}

export default Container
