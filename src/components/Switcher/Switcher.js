import {
  SwitcherWrapper,
  SwitcherBody,
  SwitcherHeader,
} from "./Switcher.styled"
import { IconModule, Title } from "components"

const Switcher = props => {
  const {
    icon,
    length,
    color,
    colorIcon,
    bgColor,
    bgColorIcon,
    children,
    onClick,
  } = props

  return (
    <SwitcherWrapper
      data-testid="SwitcherWrapper"
      tabIndex={1}
      onClick={onClick}>
      <SwitcherBody data-testid="SwitcherBody" bgColor={bgColor} color={color}>
        <SwitcherHeader data-testid="SwitcherHeader">
          <IconModule bgColor={bgColorIcon} color={colorIcon}>
            {icon}
          </IconModule>
          <Title level={4}>{length}</Title>
        </SwitcherHeader>
        <Title level={5}>{children}</Title>
      </SwitcherBody>
    </SwitcherWrapper>
  )
}

export default Switcher
