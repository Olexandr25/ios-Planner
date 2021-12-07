import React from "react"
import { Btn, TextWrapper } from "./Button.styled"

// addCategory, addTask, addFlag
const Button = props => {
  const { type, icon, fn, hover, active, fs, width, height } = props
  return (
    <>
      <Btn
        type={type}
        onClick={fn ? () => fn() : null}
        hover={hover}
        active={active}
        fs={fs}
        width={width}
        height={height}>
        {icon && props.children ? (
          <>
            {icon} <TextWrapper>{props.children}</TextWrapper>{" "}
          </>
        ) : icon ? (
          icon
        ) : props.children ? (
          props.children
        ) : null}
      </Btn>
    </>
  )
}

export default Button
