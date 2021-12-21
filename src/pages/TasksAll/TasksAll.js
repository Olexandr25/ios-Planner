import { PageLayout } from "components"
import { TasksAllStyled } from "./TasksAll.styled"
import { Routes, Route } from "react-router-dom"

const TasksAll = () => {
  return (
    <TasksAllStyled data-testid="TasksAll">
      <Routes>
        <Route exact path="/" element={<PageLayout />} />
        <Route
          exact
          path="/2"
          element={<PageLayout currentCategory="currentCategory" />}
        />
      </Routes>
    </TasksAllStyled>
  )
}

export default TasksAll
