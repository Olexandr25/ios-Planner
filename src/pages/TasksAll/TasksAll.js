import { PageLayout } from "components"
import { TasksAllStyled } from "./TasksAll.styled"

const TasksAll = () => {
  // return <PageLayout header={<PageHeader />} content={<PageContent />} />

  return (
    <TasksAllStyled data-testid="TasksAll">
      <PageLayout />
    </TasksAllStyled>
  )
}

export default TasksAll
