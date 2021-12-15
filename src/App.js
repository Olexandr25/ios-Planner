import "./styles/styles.css"
import { Layout } from "components/Layout"
import { Sidebar } from "components/Layout/Sidebar"
import { TasksAll } from "pages/TasksAll/"

function App() {
  return <Layout aside={<Sidebar />} content={"content"} />
}

export default App
