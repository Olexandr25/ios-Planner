import React from "react"
import { Wrapper, Body, Header, Icon, Length } from "./Switcher.styled"

const SwitcherV2 = props => {
  const { icon, length, color, bgColor } = props
  return (
    <>
      <Wrapper>
        <Body tabIndex="1" color={color} bgColor={bgColor}>
          <Header>
            <Icon color={color}>{icon}</Icon>
            <Length>{length}</Length>
          </Header>
          {props.children}
        </Body>
      </Wrapper>
    </>
  )
}

export default SwitcherV2
