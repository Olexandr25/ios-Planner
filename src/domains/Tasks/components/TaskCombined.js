import { Checkbox, Input, Text, Button } from "components"
import {
  TaskCombinedStyled,
  TaskCombinedLeft,
  TaskCombinedRight,
  TaskCombinedInputWrapper,
  TaskCombinedButtonWrapper,
} from "./TaskCombined.styled"
import { AiOutlineClose } from "react-icons/ai"
import { BsFillFlagFill } from "react-icons/bs"

const TaskCombined = props => {
  const { isEditableStr } = props

  return (
    <TaskCombinedStyled data-testid="TaskCombinedStyled">
      <TaskCombinedLeft data-testid="TaskCombinedLeft">
        <Checkbox bgColor="lightBlue" />
      </TaskCombinedLeft>
      <TaskCombinedRight data-testid="TaskCombinedRight">
        <TaskCombinedInputWrapper data-testid="TaskCombinedInputWrapper">
          {isEditableStr ? (
            <>
              <Input type="text" variant="outlined" size="sm" />
              <Input type="text" variant="outlined" size="xxsm" />
            </>
          ) : (
            <>
              <Text>Text</Text>
              <Text size="xxsm" color="gray" >Text</Text>
            </>
          )}
        </TaskCombinedInputWrapper>

        <TaskCombinedButtonWrapper data-testid="TaskCombinedButtonWrapper">
          <Button
            borderType="none"
            type="button"
            size="xxsm"
            icon={<AiOutlineClose />}
          />
          <Button
            borderType="none"
            type="button"
            size="xxsm"
            icon={<BsFillFlagFill />}
          />
        </TaskCombinedButtonWrapper>
      </TaskCombinedRight>
    </TaskCombinedStyled>
  )
}

export default TaskCombined
