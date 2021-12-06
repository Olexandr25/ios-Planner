import React from "react"
import {InputIcon, IconPosition, Wrapper} from "./Input.styled"

const Input = props => {
  const { Icon, text } = props
  return (
    <>
      <Wrapper >
        <IconPosition>
          <Icon />
        </IconPosition>
        <InputIcon placeholder={text} />
      </Wrapper>
    </>
  )
}

export default Input
