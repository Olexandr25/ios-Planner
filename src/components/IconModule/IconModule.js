import { IconStyled } from "./IconModule.styled"

const IconModule = props => {
  const { bgColor, color, children, ...rest } = props

  return (
    <IconStyled
      data-testid="iconModule"
      bgColor={bgColor}
      color={color}
      className={"icon"}
      {...rest}
      >
      {children}
    </IconStyled>
  )
}

export default IconModule
