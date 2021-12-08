import "./styles/styles.css"
// import {
//   AiOutlineSearch,
//   AiOutlinePlus,
//   AiOutlineUnorderedList,
// } from "react-icons/ai"
import { BsPlusCircle } from "react-icons/bs"
import { Button } from "components/Buttons"
import { IconModule } from "components/IconModule"


function App() {
  return (
    <div className="App">
      {/* <Button size="lg" icon={<BsPlusCircle />}> Add List</Button> */}
      <IconModule><BsPlusCircle /></IconModule>
    </div>
  )
}

export default App
