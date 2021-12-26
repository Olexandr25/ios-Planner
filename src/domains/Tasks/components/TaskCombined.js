import { useState } from "react"
// micro components
import { Checkbox, Input, Text, Button, Divider } from "components"
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
// firestoreService
// import { firestoreService } from "services"

const TaskCombined = props => {
  const { task } = props
  const { visibleTask, setVisibleTask, currentCategory, updateTask } =
    useStore()
  // const { generateId, getTimestamp } = firestoreService

  const [text, setText] = useState(task?.text)
  const [notes, setNotes] = useState(task?.notes)
  const [edit, setEdit] = useState(true)

  const isEmptyOrSpaces = str => {
    return str?.length !== 0 && str?.trim()
  }

  const onSubmit = e => {
    e.preventDefault()
    // const id = Math.floor(Math.random() * 1000).toString()
    // const status = false
    // const flagged = false
    // const createdAt = new Date()
    // const updatedAt = new Date()
    // const dueDataTime = new Date()
    // const categoryId = currentCategory?.id

    // if (isEmptyOrSpaces(text)) {
    //   addTask({
    //     id,
    //     text,
    //     notes,
    //     status,
    //     flagged,
    //     createdAt,
    //     updatedAt,
    //     dueDataTime,
    //     categoryId,
    //   })
    // }

    const id = task?.id
    const categoryId = task?.categoryId

    updateTask({
      id,
      text,
    })

    setText("")
    setNotes("")
    setEdit(!edit)

    setVisibleTask(false)
  }

  return (
    <TaskCombinedStyled data-testid="TaskCombinedStyled" onSubmit={onSubmit}>
      <TaskCombinedLeft data-testid="TaskCombinedLeft" className="mr-lg">
        <Checkbox bgColor="lightBlue" />
      </TaskCombinedLeft>
      <TaskCombinedRight data-testid="TaskCombinedRight">
        <Divider>
          <TaskCombinedInputTextWrapper data-testid="TaskCombinedInputTextWrapper">
            {edit ? (
              <>
                <Input
                  type="text"
                  variant="outlined"
                  size="sm"
                  autofocus
                  onChange={e => setText(e.currentTarget.value)}
                  value={text}
                />
                <Input
                  type="text"
                  variant="outlined"
                  size="xxsm"
                  color="secondary"
                  placeholder="Notes"
                  onChange={e => setNotes(e.currentTarget.value)}
                  value={notes}
                />
              </>
            ) : (
              <TaskCombinedTextWrapper
                data-testid="TaskCombinedTextWrapper"
                onClick={() => setEdit(!edit)}>
                <Text size="sm">{task?.text}</Text>
                <Text size="xxsm" color="gray">
                  {task?.notes}
                </Text>
              </TaskCombinedTextWrapper>
            )}
          </TaskCombinedInputTextWrapper>
          <TaskCombinedButtonWrapper data-testid="TaskCombinedButtonWrapper">
            <Button
              borderType="none"
              onClick={() => console.log("Remove")}
              size="xxsm"
              color="gray"
              icon={<AiOutlineClose />}
            />
            <Button
              borderType="none"
              size="xxsm"
              onClick={() => console.log("Change Color")}
              type="button"
              flagged={task?.flagged}
              icon={<BsFillFlagFill />}
            />
          </TaskCombinedButtonWrapper>
        </Divider>
      </TaskCombinedRight>
    </TaskCombinedStyled>
  )
}

export default TaskCombined
