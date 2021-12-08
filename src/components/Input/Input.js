import React from "react"
import {
  InputIcon,
  IconPosition,
  Wrapper,
  ClassicInput,
  OutlinedInput,
} from "./Input.styled"

const Input = props => {
  const { variant, icon, placeholder } = props
  return (
    <>
      <Wrapper>
        {variant === "classic" ? (
          <ClassicInput />
        ) : variant === "styled" ? (
          <>
            <IconPosition>{icon}</IconPosition>
            <InputIcon placeholder={placeholder} />
          </>
        ) : variant === "outlined" ? (
          <OutlinedInput />
        ) : null}
      </Wrapper>
    </>
  )
}

export default Input
