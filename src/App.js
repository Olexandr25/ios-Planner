import "./styles/styles.css"
import { AppLayout, Sidebar } from "components"
import { TasksAll } from "pages/TasksAll/"
import { StoreProvider } from "contexts"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <StoreProvider>
      <Router>
        <AppLayout aside={<Sidebar />} content={<TasksAll />} />
      </Router>
    </StoreProvider>
  )
}

export default App
