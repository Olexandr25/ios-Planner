import { Container, Row, Col } from "components/Grid"
import { Sidebar } from "./Sidebar"

const Layout = () => {
  return (
    <Container>
      <Row className="h-inherit">
        <Col variant="col-2">
          <Sidebar />
        </Col>
        <Col variant="col-10">Content</Col>
      </Row>
    </Container>
  )
}

export default Layout
