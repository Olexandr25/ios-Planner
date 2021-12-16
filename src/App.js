import "./styles/styles.css"
import { AppLayout, Sidebar } from "components"
import { TasksAll } from "pages/TasksAll/"

function App() {
  return <AppLayout aside={<Sidebar />} content={<TasksAll />} />
}

export default App
