import { PageLayout, Container } from "components"
import { TasksAllStyled } from "./TasksAll.styled"

const TasksAll = () => {
  // return <PageLayout header={<PageHeader />} content={<PageContent />} />

  return (
    <>
      <Container variant="container-fluid">
        <TasksAllStyled>
          <PageLayout />
        </TasksAllStyled>
      </Container>

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
