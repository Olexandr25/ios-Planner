import { Container, Row, Col } from "components/Grid"

const AppLayout = props => {
  const { aside, content } = props

  return (
    <Container>
      <Row className="h-inherit">
        <Col variant={3} className="h-inherit">{aside}</Col>
        <Col variant={9}>{content}</Col>
      </Row>
    </Container>
  )
}

export default AppLayout
