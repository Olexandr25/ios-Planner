import {
  PageLayout,
  PageHeader,
  PageContent,
  Container,
  Row,
  Col,
} from "components"
import { TasksAllStyled } from "./TasksAll.styled"

const TasksAll = () => {
  // return <PageLayout header={<PageHeader />} content={<PageContent />} />

  return (
    <>
      <TasksAllStyled data-testid="TasksAll">
        {/* <Container variant="container-fluid"> */}
        <Row className="p-zero m-zero">
          <Col>
            <PageHeader />
          </Col>
        </Row>
        {/* </Container> */}
      </TasksAllStyled>
    </>
  )
}

export default TasksAll
