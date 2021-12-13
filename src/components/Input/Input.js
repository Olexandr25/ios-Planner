import React from "react"
import {
  InputIcon,
  IconPosition,
  Wrapper,
  ClassicInput,
  OutlinedInput,
} from "./Input.styled"

const Input = props => {
  const { variant, icon, placeholder, type, className, size } = props

  return (
    <Wrapper>
      {variant === "classic" ? (
        <ClassicInput type={type} className={className} size={size} />
      ) : variant === "styled" ? (
        <>
          <IconPosition>{icon}</IconPosition>
          <InputIcon
            placeholder={placeholder}
            type={type}
            className={className}
            size={size}
          />
        </>
      ) : variant === "outlined" ? (
        <OutlinedInput type={type} className={className} size={size} />
      ) : null}
    </Wrapper>
  )
}

export default Input
