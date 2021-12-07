import React from "react"
import {
  InputIcon,
  IconPosition,
  Wrapper,
  ClassicInput,
  OutlinedInput,
} from "./Input.styled"

const Input = props => {
  const { variant, icon, text } = props
  return (
    <>
      <Wrapper>
        {variant === "classic" ? (
          <ClassicInput />
        ) : variant === "styled" ? (
          <>
            <IconPosition>{icon}</IconPosition>
            <InputIcon placeholder={text} />
          </>
        ) : variant === "outlined" ? (
          <OutlinedInput />
        ) : null}
      </Wrapper>
    </>
  )
}

export default Input
