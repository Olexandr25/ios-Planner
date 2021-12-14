import "./styles/styles.css"
import { Layout } from "components/Layout"
import { Sidebar } from "components/Layout/Sidebar"
import { Content } from "components/Layout/Content"

function App() {
  return <Layout aside={<Sidebar />} content={<Content />} />
}

export default App
