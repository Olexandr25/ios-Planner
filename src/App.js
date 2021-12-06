import "./styles/styles.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Input } from "components/Input"


function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Input Icon={AiOutlineSearch} text={"Search"} />
    </div>
  )
}

export default App
