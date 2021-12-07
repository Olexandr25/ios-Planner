import React from "react"
import { Body } from "./Icon.styled"

const Icon = props => {
  const { bgColor } = props
  return (
    <>
      <Body bgColor={bgColor}>{props.children}</Body>
    </>
  )
}

export default Icon
