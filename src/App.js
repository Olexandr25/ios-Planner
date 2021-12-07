import "./styles/styles.css"
import { Switcher } from "components/Switcher"
import {
  BsCalendar3,
  BsCalendarDate,
  BsFillInboxFill,
  BsFillFlagFill,
} from "react-icons/bs"

function App() {
  const show = () => {
    console.log("It's switcher")
  }
  const length = 25
  return (
    <div className="App">
      <h1>App.js</h1>
      <Switcher
        icon={<BsFillInboxFill />}
        length={length}
        color="var(--color-white)">
        All
      </Switcher>
      <Switcher icon={<BsCalendar3 />} length={0}>
        Schedule
      </Switcher>
      <Switcher icon={<BsCalendarDate />} length={1}>
        Today
      </Switcher>
      <Switcher icon={<BsFillFlagFill />} length={2}>
        Flagged
      </Switcher>
    </div>
  )
}

export default App
