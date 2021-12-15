import { Row, Col } from "components"
import { TaskCombined } from "domains"

const Content = () => {
  return (
      <Row>
        <Col>
          <TaskCombined isEditableStr={true} flagged={false} />
          <TaskCombined isEditableStr={false} flagged={true} />
          <TaskCombined isEditableStr={false} flagged={true} />
        </Col>
      </Row>
  )
}

export default Content
