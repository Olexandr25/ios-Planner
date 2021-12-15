import { Container, Row, Col } from "components"
import { PageHeader } from "components"

const PageLayout = props => {
  return (
    <>
      <Row className="p-zero m-zero">
        <Col>
          <PageHeader />
        </Col>
      </Row>
      <Row className="p-zero m-zero"> 123 </Row>
    </>

    // <Container variant="container">
    //   <Row>
    //     <Col>{header}</Col>
    //   </Row>
    //   {content}
    // </Container>
  )
}

export default PageLayout
