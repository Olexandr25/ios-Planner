import {
  SwitcherWrapper,
  SwitcherBody,
  SwitcherHeader,
} from "./Switcher.styled"
import { IconModule, Text, Row, Col } from "components"

const Switcher = props => {
  const { icon, length, color, colorIcon, bgColor, bgColorIcon, children } =
    props

  return (
    <SwitcherWrapper data-testid="SwitcherWrapper">
      {/* <Row> */}
        <SwitcherBody
          data-testid="SwitcherBody"
          bgColor={bgColor}
          color={color}>
          <SwitcherHeader data-testid="SwitcherHeader">
          {/* <Col className="d-flex justify-content-space-between"> */}
            <IconModule bgColor={bgColorIcon} color={colorIcon}>
              {icon}
            </IconModule>
            <Text size="md" fontWeight="semibold">
              {length}
            </Text>
          {/* </Col> */}
          </SwitcherHeader>
          {children}
        </SwitcherBody>
      {/* </Row> */}
    </SwitcherWrapper>
  )
}

export default Switcher
