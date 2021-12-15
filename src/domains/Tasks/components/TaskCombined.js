import { Row, Col, Checkbox, Input, Text, Button, Divider } from "components"
import { TaskCombinedStyled } from "./TaskCombined.styled"

const TaskCombined = () => {
  return (
    <>
      <Row>
        <Col>
          <Checkbox bgColor="lightBlue" />
        </Col>
        <Col variant={11}>
          <Divider>
            <Row>
              <Col variant={10}>
                <Input type="text" variant="outlined" />
                <Input type="text" variant="outlined" />
              </Col>
              <Col className="d-flex" variant={1}>
                <Button />
                <Button />
              </Col>
            </Row>
          </Divider>
        </Col>
      </Row>
    </>
  )
}

export default TaskCombined
