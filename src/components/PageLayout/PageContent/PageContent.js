import { Row, Col, Content } from "components"
// import { SubHeader } from "components"
import { PageContentStyled } from "./PageContent.styled"

const PageContent = () => {
  return (
    <PageContentStyled data-testid="PageContentStyled">
      <Row>
        <Col variant={12}>
          {/* <SubHeader /> */}
        </Col>
        <Col variant={12}>
          <Content />
        </Col>
      </Row>
    </PageContentStyled>
  )
}

export default PageContent
