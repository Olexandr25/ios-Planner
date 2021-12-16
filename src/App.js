import "./styles/styles.css"
import { AppLayout, Sidebar } from "components"
import { TasksAll } from "pages/TasksAll/"
import { StoreProvider } from "contexts"

function App() {
  return (
    <StoreProvider>
      <AppLayout aside={<Sidebar />} content={<TasksAll />} />
    </StoreProvider>
  )
}

export default App
