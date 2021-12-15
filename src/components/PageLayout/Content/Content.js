import { Row, Col } from "components"
import { TaskCombined } from "domains"

const Content = () => {
  return (
      <Row>
        <Col>
          <TaskCombined isEditableStr={true} />
          <TaskCombined isEditableStr={false} />
        </Col>
      </Row>
  )
}

export default Content
