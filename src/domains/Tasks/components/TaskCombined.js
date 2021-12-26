import { useState } from "react"
// micro components
import { Checkbox, Input, Text, Button, Divider, Row, Col } from "components"
// styled components
import {
  TaskCombinedStyled,
  TaskCombinedLeft,
  TaskCombinedRight,
  TaskCombinedInputTextWrapper,
  TaskCombinedButtonWrapper,
  TaskCombinedTextWrapper,
} from "./TaskCombined.styled"
// icons
import { AiOutlineClose } from "react-icons/ai"
import { BsFillFlagFill } from "react-icons/bs"
// context
import { useStore } from "contexts"

const TaskCombined = props => {
  const { task } = props
  const { setVisibleTask, updateTask, removeRecord, updateRecord } = useStore()

  const [text, setText] = useState(task?.text)
  const [notes, setNotes] = useState(task?.notes)
  const [flagged, setFlagged] = useState(task?.flagged)
  const [status, setStatus] = useState(task?.status)
  const [edit, setEdit] = useState(true)

  const onSubmit = e => {
    e.preventDefault()

    const id = task?.id

    updateTask({
      id,
      text,
      notes,
    })
    setEdit(!edit)

    setVisibleTask(false)
  }

  const handleEnter = e => {
    if (e.keyCode === 13) {
      const values = {
        text,
        notes,
        flagged,
        status,
      }

      const path = task
      const id = task?.id

      updateRecord({ path, id, values })
    }
  }

  const changeFlagge = () => {
    setFlagged(!flagged)
    console.table("--------------flagged", flagged)
  }

  return (
    <>
      <Row>
        <Col>
          <Checkbox bgColor="lightBlue" />
        </Col>
      </Row>
    </>

    // <TaskCombinedStyled data-testid="TaskCombinedStyled" onSubmit={onSubmit}>
    //   <TaskCombinedLeft data-testid="TaskCombinedLeft" className="mr-lg">
    //     <Checkbox bgColor="lightBlue" />
    //   </TaskCombinedLeft>
    //   <TaskCombinedRight data-testid="TaskCombinedRight">
    //     <Divider>
    //       <TaskCombinedInputTextWrapper data-testid="TaskCombinedInputTextWrapper">
    //         {edit ? (
    //           <>
    //             <Input
    //               type="text"
    //               variant="outlined"
    //               size="sm"
    //               autofocus
    //               onChange={e => setText(e.currentTarget.value)}
    //               onKeyDown={handleEnter}
    //               value={text}
    //             />
    //             <Input
    //               type="text"
    //               variant="outlined"
    //               size="xxsm"
    //               color="secondary"
    //               placeholder="Notes"
    //               onChange={e => setNotes(e.currentTarget.value)}
    //               value={notes}
    //             />
    //           </>
    //         ) : (
    //           <TaskCombinedTextWrapper
    //             data-testid="TaskCombinedTextWrapper"
    //             onClick={() => setEdit(!edit)}>
    //             <Text size="sm">{task?.text}</Text>
    //             <Text size="xxsm" color="gray">
    //               {task?.notes}
    //             </Text>
    //           </TaskCombinedTextWrapper>
    //         )}
    //       </TaskCombinedInputTextWrapper>
    //       <TaskCombinedButtonWrapper data-testid="TaskCombinedButtonWrapper">
    //         <Button
    //           borderType="none"
    //           type="button"
    //           onClick={() => removeRecord({ path: "task", id: task?.id })}
    //           size="xxsm"
    //           color="gray"
    //           icon={<AiOutlineClose />}
    //         />
    //         <Button
    //           borderType="none"
    //           size="xxsm"
    //           // onClick={() => changeFlagge()}
    //           // type="button"
    //           flagged={flagged}
    //           icon={<BsFillFlagFill />}
    //         />
    //       </TaskCombinedButtonWrapper>
    //     </Divider>
    //   </TaskCombinedRight>
    // </TaskCombinedStyled>
  )
}

export default TaskCombined
