import { PageHeader, PageContent, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"

const PageLayout = props => {
  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Col variant={12}>
          <PageHeader />
        </Col>
        <Col variant={12}>
          <PageContent />
        </Col>
      </Row>
    </PageLayoutStyled>
  )
}

export default PageLayout
