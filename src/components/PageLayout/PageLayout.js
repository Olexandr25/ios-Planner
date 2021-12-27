import { PageHeader, PageContent, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"
import { useStore } from "contexts"


const PageLayout = ({ title, count }) => {
  const { setVisibleTask } = useStore()

  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Col variant={12}>
          <PageHeader title={title} count={count} setVisibleTask={setVisibleTask} />
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
