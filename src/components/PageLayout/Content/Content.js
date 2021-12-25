import { Row, Col } from "components"
import { TaskCombined } from "domains"
import { ContentStyled } from "./Contents.styled"
import { useStore } from "contexts"

const Content = () => {
  const { visibleTask } = useStore()

  return (
    <ContentStyled data-testid="ContentStyled">
      <Row>
        <Col>
        {visibleTask 
        ? <TaskCombined isEditableStr={visibleTask} /> 
        : <></>}
        </Col>
      </Row>
    </ContentStyled>
  )
}

export default Content
