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
  TaskForm,
} from "./TaskCombined.styled"
// icons
import { AiOutlineClose } from "react-icons/ai"
import { BsFillFlagFill } from "react-icons/bs"
// context
import { useStore } from "contexts"

const TaskCombined = props => {
  const { isEditableStr, flagged } = props
  const { visibilityTaskCombined, setVisibilityTaskCombined } = useStore()

  const [editText, setEditText] = useState("")

  const onSubmit = e => {
    console.log("onSubmit")
    // e.preventDefault()
    // setVisibilityTaskCombined(!visibilityTaskCombined)
    // console.log(visibilityTaskCombined)
  }

  const show = e => {
    e.preventDefault()
    console.log("show")
  }

  console.log(`editText: ${editText}`)
  return (
    <TaskCombinedStyled data-testid="TaskCombinedStyled">
      <TaskCombinedLeft data-testid="TaskCombinedLeft" className="mr-lg">
        <Checkbox bgColor="lightBlue" />
      </TaskCombinedLeft>
      <TaskCombinedRight data-testid="TaskCombinedRight">
        <Divider>
          <TaskCombinedInputWrapper data-testid="TaskCombinedInputWrapper">
            {isEditableStr ? (
              <TaskForm onSubmit={show}>
                <form onSubmit={show}>
                  <input type="text" />
                  <input type="text" />
                  <button>fdsj</button>
                </form>
                <Input
                  type="text"
                  variant="outlined"
                  size="sm"
                  onChange={e => setEditText(e.target.value)}
                  autofocus
                />
                <Input
                  type="text"
                  variant="outlined"
                  size="xxsm"
                  color="secondary"
                  placeholder="Notes"
                />
              </TaskForm>
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
              type="button"
              size="xxsm"
              color="gray"
              icon={<AiOutlineClose />}
            />
            <Button
              borderType="none"
              type="button"
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
