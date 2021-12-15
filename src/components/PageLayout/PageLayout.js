import { Container, Row, Col } from "components"

const PageLayout = props => {
  const { header, content } = props

  return (
    <Container variant="container">
      <Row>
        <Col>{header}</Col>
      </Row>
      {content}
    </Container>
  )
}

export default PageLayout
