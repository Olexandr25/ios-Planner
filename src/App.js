import "./styles/styles.css"
import { Counter } from "components/Counter"

function App() {

  return (
    <div className="App">
      <Counter color="blue" fs="large" fw="normal">1234</Counter>
    </div>
  )
}

export default App
