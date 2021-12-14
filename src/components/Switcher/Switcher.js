import {
  SwitcherWrapper,
  SwitcherBody,
  SwitcherHeader,
} from "./Switcher.styled"
import { IconModule } from "components/IconModule"
import { Text } from "components/Text"

const Switcher = props => {
  const { icon, length, color, colorIcon, bgColor, bgColorIcon, children } =
    props

  return (
    <SwitcherWrapper data-testid="SwitcherWrapper">
      <SwitcherBody data-testid="SwitcherBody" bgColor={bgColor} color={color}>
        <SwitcherHeader data-testid="SwitcherHeader">
            <IconModule bgColor={bgColorIcon} color={colorIcon}>
              {icon}
            </IconModule>
            <Text size="md" fontWeight="semibold">
              {length}
            </Text>
        </SwitcherHeader>
        {children}
      </SwitcherBody>
    </SwitcherWrapper>
  )
}

export default Switcher
