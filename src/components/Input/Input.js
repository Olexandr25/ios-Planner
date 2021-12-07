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
      {variant === "classic" ? (
        <Wrapper>
          <ClassicInput />
        </Wrapper>
      ) : variant === "styled" ? (
        <Wrapper>
          <IconPosition>{icon}</IconPosition>
          <InputIcon placeholder={text} />
        </Wrapper>
      ) : variant === "outlined" ? (
        <Wrapper>
          <OutlinedInput />
        </Wrapper>
      ) : null}
    </>
  )
}

export default Input
