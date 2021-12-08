import React from "react"
import { IconStyled } from "./IconModule.styled"

const IconModule = props => {
  const { bgColor, children } = props

  return <IconStyled bgColor={bgColor}>{children}</IconStyled>
}

export default IconModule
