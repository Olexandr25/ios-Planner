import "./styles/styles.css"
import { AppLayout, Sidebar } from "components"
import { Navigation } from "pages/"
import { StoreProvider } from "contexts"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <StoreProvider>
      <Router>
        <AppLayout aside={<Sidebar />} content={<Navigation />} />
      </Router>
    </StoreProvider>
  )
}

export default App
