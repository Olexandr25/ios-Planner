import { Wrapper, Body, Header } from "./Switcher.styled"
import { Row, Col } from "components/Grid"
import { IconModule } from "components/IconModule"
import { Text } from "components/Text"

const Switcher = props => {
  const { icon, length, color, colorIcon, bgColor, bgColorIcon, children } =
    props

  return (
    <Wrapper>
      <Body bgColor={bgColor} color={color}>
        <Header>
          <Row>
            <Col variant="col-11">
              <IconModule bgColor={bgColorIcon} color={colorIcon}>
                {icon}
              </IconModule>
            </Col>
            <Col variant="col-1">
              <Text size="md" fontWeight="semibold">
                {length}
              </Text>
            </Col>
          </Row>
        </Header>
        <Row>{children}</Row>
      </Body>
    </Wrapper>
  )
}

export default Switcher
