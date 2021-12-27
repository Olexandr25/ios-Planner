import { IconStyled } from "./IconModule.styled"

const IconModule = props => {
  const { bgColor, color, children } = props

  return (
    <IconStyled
      data-testid="iconModule"
      bgColor={bgColor}
      color={color}
      className={"icon"}>
      {children}
    </IconStyled>
  )
}

export default IconModule
