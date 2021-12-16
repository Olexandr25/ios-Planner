// Micro - components
import { Row, Col, Button, Title, Completed } from "components"
// Icons
import { AiOutlinePlus } from "react-icons/ai"
// Styled components
import { PageHeaderButton, PageHeaderStyled } from "./PageHeader.styled"

const PageHeader = () => {
  return (
    <PageHeaderStyled data-testid="PageHeader">
      <Row>
        <Col variant={12}>
          <PageHeaderButton data-testid="PageHeaderButton">
            <Button
              type="button"
              icon={<AiOutlinePlus />}
              borderRadius="lg"
              color="secondary"
              borderType="none"
              isHovered={true}
              isActive={true}
            />
          </PageHeaderButton>
        </Col>
        <Col
          variant={12}
          className="d-flex justify-content-space-between mb-lg">
          <Title>All</Title>
          <Title>25</Title>
        </Col>
        <Col variant={12}>
          <Completed length={0} color="black" />
        </Col>
      </Row>
    </PageHeaderStyled>
  )
}

export default PageHeader
