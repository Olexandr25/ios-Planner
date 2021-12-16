import { PageHeader, PageContent, Container, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"

const PageLayout = () => {
  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Container>
          <Col variant={12}>
            <PageHeader />
          </Col>
          <Col variant={12}>
            <PageContent />
          </Col>
        </Container>
      </Row>
    </PageLayoutStyled>
  )
}

export default PageLayout
