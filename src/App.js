import "./styles/styles.css"
import { Title } from "components/Title"

function App() {

  return (
    <div className="App">
      <Title fs="xxx-large" fw="bolder" color="#000">
        Page name
      </Title>
      <Title fs="large" fw="bolder" color="#eb4e3d">
        Scheduled
      </Title>
    </div>
  )
}

export default App
