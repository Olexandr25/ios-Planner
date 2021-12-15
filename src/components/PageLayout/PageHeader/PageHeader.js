// Micro - components
import { Row, Col, Button, Title } from "components"
// Icons
import { AiOutlinePlus } from "react-icons/ai"
// Styled components
import {
  PageHeaderButton,
  PageHeaderStyled,
} from "./PageHeader.styled"

const PageHeader = () => {
  return (
    <PageHeaderStyled data-testid="PageHeader">
      <Row>
        <Col>
          <PageHeaderButton data-testid="PageHeaderButton">
            <Button
              icon={<AiOutlinePlus />}
              borderType="none"
              isHovered={true}
              isActive={true}
            />
          </PageHeaderButton>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-space-between">
          <Title>All</Title>
          <Title>25</Title>
        </Col>
      </Row>
    </PageHeaderStyled>
  )
}

export default PageHeader
