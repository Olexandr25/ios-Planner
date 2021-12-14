import React from "react"
import { IconStyled } from "./IconModule.styled"

const IconModule = props => {
  const { bgColor, color, children } = props

  return (
    <IconStyled data-testid="iconModule" bgColor={bgColor} color={color}>
      {children}
    </IconStyled>
  )
}

export default IconModule
