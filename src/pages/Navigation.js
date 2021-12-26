import { NavigationStyled } from "./Navigation.styled"
import { Routes, Route } from "react-router-dom"
import { Category } from "."

const Navigation = () => {
  return (
    <NavigationStyled data-testid="TasksAll">
      <Routes>
        <Route exact path="/category/:id" element={<Category />} />
        <Route exact path="/" element={<></>}  />
      </Routes>
    </NavigationStyled>
  )
}

export default Navigation
