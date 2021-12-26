// Micro - components
import { Row, Col, Button, Title, Completed } from "components"
// Icons
import { AiOutlinePlus } from "react-icons/ai"
// Styled components
import { PageHeaderButton, PageHeaderStyled } from "./PageHeader.styled"
// context
import { useStore } from "contexts"
import { useParams } from "react-router-dom"

const PageHeader = props => {
  const { title, count } = props
  const { setVisibleTask, addTask, store } = useStore()
  const { id } = useParams()
  const paramsId = id

  const changeVisibility = () => {
    setVisibleTask(true)

    const id = Math.floor(Math.random() * 1000).toString()
    const text = ""
    const notes = ""
    const status = false
    const flagged = false
    const createdAt = new Date()
    const updatedAt = new Date()
    const dueDataTime = new Date()
    const categoryId = paramsId || store.category[0].id

    addTask({
      id,
      text,
      notes,
      status,
      flagged,
      createdAt,
      updatedAt,
      dueDataTime,
      categoryId,
    })
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
              onClick={() => changeVisibility()}
            />
          </PageHeaderButton>
        </Col>
      </Row>
      <Row>
        <Col
          variant={12}
          className="d-flex justify-content-space-between mb-lg">
          <Title>{title}</Title>
          <Title>{count}</Title>
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
