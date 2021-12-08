import "./styles/styles.css"
import { Text } from "components/Text"

function App() {

  return (
    <div className="App">
      <Text fs="medium" fw="lighter" color="#000">
        New List
      </Text>
      <Text fs="large" fw="bolder" color="#eb4e3d">
        Scheduled
      </Text>
    </div>
  )
}

export default App
