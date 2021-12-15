import { Container, Row, Col } from "components/Grid"

const Layout = props => {
  const { aside, content } = props

  return (
    <Container>
      <Row className="h-inherit">
        <Col variant={4} className="p-zero">{aside}</Col>
        <Col variant={8}>{content}</Col>
      </Row>
    </Container>
  )
}

export default Layout
