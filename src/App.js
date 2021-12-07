import "./styles/styles.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Input } from "components/Input"

function App() {
  return (
    <div className="App">
      <Input variant="styled" icon={<AiOutlineSearch />} text="Search" />
      <Input variant="classic" />
      <Input variant="outlined" icon={<AiOutlineSearch />} text="Search" />
    </div>
  )
}

export default App
