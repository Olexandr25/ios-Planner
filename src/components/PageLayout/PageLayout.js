import { PageHeader, PageContent, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"

const PageLayout = props => {
  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Col>
          <PageHeader />
        </Col>
      </Row>
      <Row className="">
        <Col>
          <PageContent />
        </Col>
      </Row>
    </PageLayoutStyled>
  )
}

export default PageLayout
