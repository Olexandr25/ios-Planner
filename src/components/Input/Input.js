import React from "react"
import {InputIcon, IconPosition, Wrapper} from "./Input.styled"

const Input = props => {
  const { icon, text } = props
  return (
    <>
      <Wrapper >
        <IconPosition>
          {icon}
        </IconPosition>
        <InputIcon placeholder={text} />
      </Wrapper>
    </>
  )
}

export default Input
