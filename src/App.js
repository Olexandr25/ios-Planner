import "./styles/styles.css"
import { Icon } from "components/Icon"
import { AiOutlineUnorderedList } from "react-icons/ai"

function App() {

  return (
    <div className="App">
      <Icon bgColor={"lightgreen"}>
        <AiOutlineUnorderedList />
      </Icon>
      <Icon>
        <AiOutlineUnorderedList />
      </Icon>
    </div>
  )
}

export default App
