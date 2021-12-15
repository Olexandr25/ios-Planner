import { PageLayout, Container, Row, Col } from "components"
import { TasksAllStyled } from "./TasksAll.styled"

const TasksAll = () => {
  // return <PageLayout header={<PageHeader />} content={<PageContent />} />

  return (
    <>
        <Row>
          <Col>
            <TasksAllStyled data-testid="TasksAll">
              <PageLayout />
            </TasksAllStyled>
          </Col>
        </Row>

      {/* <TasksAllStyled data-testid="TasksAll">
      <Row className="p-zero m-zero">
        <Col>
          <PageHeader />
        </Col>
      </Row>
      <Row className="p-zero m-zero">
        <PageContent />
      </Row>
    </TasksAllStyled> */}
    </>
  )
}

export default TasksAll
