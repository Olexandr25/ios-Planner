import { Row, Col } from "components"
import { TaskCombined } from "domains"
import { ContentStyled } from "./Contents.styled"

const Content = () => {
  return (
    <ContentStyled data-testid="ContentStyled">
      <Row>
        <Col>
          <TaskCombined isEditableStr={true} flagged={false} />
          <TaskCombined isEditableStr={false} flagged={true} />
          <TaskCombined isEditableStr={false} flagged={true} />
        </Col>
      </Row>
    </ContentStyled>
  )
}

export default Content
