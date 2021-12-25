import { Row, Col } from "components"
import { TaskCombined } from "domains"
import { ContentStyled } from "./Contents.styled"
import { useStore } from "contexts"

const Content = () => {
  const { visibilityTaskCombined } = useStore()

  return (
    <ContentStyled data-testid="ContentStyled">
      <Row>
        <Col>
        {visibilityTaskCombined 
        ? <TaskCombined isEditableStr={visibilityTaskCombined} flagged={false} /> 
        : <></>}
        {/* <TaskCombined flagged={false} /> */}
        </Col>
      </Row>
    </ContentStyled>
  )
}

export default Content
