import { Row, Col, SubHeader, Content } from "components"

const PageContent = () => {
  return (
      <Row>
        <Col variant={12}>
          <SubHeader />
        </Col>
        <Col variant={12}>
          <Content />
        </Col>
      </Row>
  )
}

export default PageContent
