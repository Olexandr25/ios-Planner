import { Row, Col, Checkbox, Input, Text, Button, Divider } from "components"
import {
  TaskCombinedStyled,
  TaskCombinedLeft,
  TaskCombinedRight,
} from "./TaskCombined.styled"
import { AiOutlineClose } from "react-icons/ai"
import { BsFillFlagFill } from "react-icons/bs"

const TaskCombined = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{display: "flex", alignItems: "baseline"}}>
          <Checkbox bgColor="lightBlue" />
        </div>
        <div style={{ width: "100%", display: "flex", borderBottom: "1px solid gray" }}>
          <div style={{ width: "inherit" }}>
            <Input type="text" variant="outlined" size="sm"/>
            <Input type ="text" variant="outlined" size="xxsm"/>
          </div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <Button borderType="none" type="button" size="xxsm" icon={<AiOutlineClose />} />
            <Button borderType="none" type="button" size="xxsm" icon={<BsFillFlagFill />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskCombined
