import "./styles/styles.css"
import { SwitcherV2 } from "components/Switcher"
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
      <SwitcherV2
        icon={<BsFillInboxFill />}
        length={length}
        color="var(--color-white)">
        All
      </SwitcherV2>
      <SwitcherV2 icon={<BsCalendar3 />} length={0}>
        Schedule
      </SwitcherV2>
      <SwitcherV2 icon={<BsCalendarDate />} length={1}>
        Today
      </SwitcherV2>
      <SwitcherV2 icon={<BsFillFlagFill />} length={2}>
        Flagged
      </SwitcherV2>
    </div>
  )
}

export default App
