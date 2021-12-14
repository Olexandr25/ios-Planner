import { Container, Row, Col } from "components/Grid"

const Layout = props => {
  const { aside, content } = props

  return (
    <Container>
      <Row className="h-inherit">
        <Col xs={2} sm={2} md={2} lg={2}>
          {aside}
        </Col>
        <Col xs={5} sm={7} md={8} lg={9}>
          {content}
          Content
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
