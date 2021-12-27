import { NavigationStyled } from "./Navigation.styled"
import { Routes, Route } from "react-router-dom"
import { Category, TasksFlagged, TasksAll } from "."

const Navigation = () => {
  return (
    <NavigationStyled data-testid="TasksAll">
      <Routes>
        <Route exact path="/category/:id" element={<Category />} />
        <Route exact path="/" element={<></>}  />
        <Route exact path="/switcher/">
          <Route exact path="flagged" element={<TasksFlagged />} />
          <Route exact path="all" element={<TasksAll />} />
        </Route>
      </Routes>
    </NavigationStyled>
  )
}

export default Navigation
