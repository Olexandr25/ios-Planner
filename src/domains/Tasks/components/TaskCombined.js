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
import { firestoreService } from "services"

const TaskCombined = props => {
  const { isEditableStr, flagged } = props
  const {
    visibilityTaskCombined,
    setVisibilityTaskCombined,
    currentCategory,
    addRecord,
  } = useStore()
  const { generateId, getTimestamp } = firestoreService

  const [text, setText] = useState("")
  const [notionText, setNotionText] = useState("")

  const isEmptyOrSpaces = str => {
    return str.length !== 0 && str.trim()
  }

  const onSubmit = e => {
    console.log(`Work`)
    e.preventDefault()
    if (isEmptyOrSpaces(text)) {
      addRecord(
        {
          id: generateId(`task`),
          text: text,
          notes: notionText,
          status: false,
          flagged: false,
          createdAt: getTimestamp(),
          updatedAt: getTimestamp(),
          dueDataTime: getTimestamp(), // in future will change
          categoryId: currentCategory.id,
        },
        `task`
      )
    }
    setVisibilityTaskCombined(!visibilityTaskCombined)
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
                  onChange={e => setNotionText(e.currentTarget.value)}
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
              flagged={flagged}
              icon={<BsFillFlagFill />}
            />
          </TaskCombinedButtonWrapper>
        </Divider>
      </TaskCombinedRight>
    </TaskCombinedStyled>
  )
}

export default TaskCombined
