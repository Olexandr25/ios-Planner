import { PageLayout } from "components"
import { TasksAllStyled } from "./TasksAll.styled"
import { Routes, Route } from "react-router-dom"

const TasksAll = () => {
  return (
    <TasksAllStyled data-testid="TasksAll">
      <Routes>
        <Route exact path="/category/:id" element={<PageLayout />} />
        <Route exact path="/" element={<></>}  />
      </Routes>
    </TasksAllStyled>
  )
}

export default TasksAll
