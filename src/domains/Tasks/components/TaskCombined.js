import { useState } from "react"
// micro components
import { Checkbox, Input, Text, Button, Divider } from "components"
// styled components
import {
  TaskCombinedStyled,
  TaskCombinedLeft,
  TaskCombinedRight,
  TaskCombinedInputWrapper,
  TaskCombinedButtonWrapper,
} from "./TaskCombined.styled"
// icons
import { AiOutlineClose } from "react-icons/ai"
import { BsFillFlagFill } from "react-icons/bs"
// context
import { useStore } from "contexts"
// firestoreService
// import { firestoreService } from "services"

const TaskCombined = props => {
  const { isEditableStr } = props
  const { visibleTask, setVisibleTask, currentCategory, addTask } = useStore()
  // const { generateId, getTimestamp } = firestoreService

  const [text, setText] = useState("")
  const [notes, setNotes] = useState("")

  const isEmptyOrSpaces = str => {
    return str.length !== 0 && str.trim()
  }

  const onSubmit = e => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 1000).toString()
    const status = false
    const flagged = false
    const createdAt = new Date()
    const updatedAt = new Date()
    const dueDataTime = new Date()
    const categoryId = currentCategory.id

    if (isEmptyOrSpaces(text)) {
      addTask({
        id,
        text,
        notes,
        status,
        flagged,
        createdAt,
        updatedAt,
        dueDataTime,
        categoryId,
      })
    }

    setVisibleTask(!visibleTask)
  }

  return (
    <TaskCombinedStyled data-testid="TaskCombinedStyled" onSubmit={onSubmit}>
      <TaskCombinedLeft data-testid="TaskCombinedLeft" className="mr-lg">
        <Checkbox bgColor="lightBlue" />
      </TaskCombinedLeft>
      <TaskCombinedRight data-testid="TaskCombinedRight">
        <Divider>
          <TaskCombinedInputWrapper data-testid="TaskCombinedInputWrapper">
            {isEditableStr ? (
              <>
                <Input
                  type="text"
                  variant="outlined"
                  size="sm"
                  autofocus
                  onChange={e => setText(e.currentTarget.value)}
                />
                <Input
                  type="text"
                  variant="outlined"
                  size="xxsm"
                  color="secondary"
                  placeholder="Notes"
                  onChange={e => setNotes(e.currentTarget.value)}
                />
              </>
            ) : (
              <>
                <Text>Text</Text>
                <Text size="xxsm" color="gray">
                  Text
                </Text>
              </>
            )}
          </TaskCombinedInputWrapper>
          <TaskCombinedButtonWrapper data-testid="TaskCombinedButtonWrapper">
            <Button
              borderType="none"
              size="xxsm"
              color="gray"
              icon={<AiOutlineClose />}
            />
            <Button
              borderType="none"
              size="xxsm"
              // ! flagged={false}
              icon={<BsFillFlagFill />}
            />
          </TaskCombinedButtonWrapper>
        </Divider>
      </TaskCombinedRight>
    </TaskCombinedStyled>
  )
}

export default TaskCombined
