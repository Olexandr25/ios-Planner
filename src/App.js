import "./styles/styles.css"
import { Button } from "components/Buttons"
import { Input } from "components/Input"
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
import { BsPlusCircle } from "react-icons/bs"

function App() {
  const show = () => {
    console.log("It's button")
  }
  return (
    <div className="App">
      <h1>App.js</h1>
      <Input icon={<AiOutlineSearch />} text={"Search"} />
      <Button type={"submit"} icon={<BsPlusCircle />} fn={show}>
        Add List
      </Button>
      <Button type={"button"} fn={show} width={"60px"} height={"32px"}>
        Show
      </Button>
      <Button
        type={"submit"}
        icon={<AiOutlinePlus />}
        hover
        active
        fs={"20px"}></Button>
    </div>
  )
}

export default App
