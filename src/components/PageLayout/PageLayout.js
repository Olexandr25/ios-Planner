import { Container, Row, Col } from "components"
import { PageHeader } from "components"

const PageLayout = props => {
  return (
    <>
      {/* src > components > PageLayout > PageLayout.js */}

      <Row className="p-zero m-zero">
        <PageHeader />
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
