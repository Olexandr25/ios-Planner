import { PageHeader, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"

const PageLayout = props => {
  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row>
        <Col>
          <PageHeader />
        </Col>
      </Row>
      <Row className="p-zero m-zero"> 123 </Row>
    </PageLayoutStyled>

    // <Container variant="container">
    //   <Row>
    //     <Col>{header}</Col>
    //   </Row>
    //   {content}
    // </Container>
  )
}

export default PageLayout
