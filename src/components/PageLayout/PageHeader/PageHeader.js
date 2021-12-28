// Micro - components
import { Row, Col, Button, Title, Completed } from "components"
// Icons
import { AiOutlinePlus } from "react-icons/ai"
// Styled components
import { PageHeaderButton, PageHeaderStyled } from "./PageHeader.styled"

const PageHeader = props => {
  const { title, count, titleColor, setVisibleTask, showCount } = props

  const showTaskCombined = () => {
    setVisibleTask(true)
  }

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
              onClick={showTaskCombined}
            />
          </PageHeaderButton>
        </Col>
      </Row>
      <Row>
        <Col
          variant={12}
          className="d-flex justify-content-space-between mb-lg">
          <Title className="pb-sm" color={titleColor}>
            {title}
          </Title>
          {showCount && <Title color={titleColor}>{count}</Title>}
        </Col>
      </Row>
      <Row>
        <Col variant={12}>
          <Completed length={0} color="black" />
        </Col>
      </Row>
    </PageHeaderStyled>
  )
}

export default PageHeader
