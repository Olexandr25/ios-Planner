import { PageHeader, PageContent, Container, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"

const PageLayout = ({ title, count }) => {
  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Col variant={12}>
          <PageHeader title={title} count={count} />
        </Col>
      </Row>
      <Row>
        <Col variant={12}>
          <PageContent />
        </Col>
      </Row>
    </PageLayoutStyled>
  )
}

export default PageLayout
