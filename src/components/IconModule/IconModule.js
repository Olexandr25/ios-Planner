import { IconStyled } from "./IconModule.styled"

const IconModule = props => {
  const { bgColor, color, children, className } = props

  return (
    <IconStyled data-testid="iconModule" bgColor={bgColor} color={color} className={className}>
      {children}
    </IconStyled>
  )
}

export default IconModule
