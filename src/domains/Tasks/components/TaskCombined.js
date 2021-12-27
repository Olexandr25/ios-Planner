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
import { useParams } from "react-router-dom"

const TaskCombined = ({ task }) => {
  const { removeRecord, addRecord, updateRecord, setVisibleTask, visibleTask } =
    useStore()

  const [text, setText] = useState(task?.text || "")
  const [notes, setNotes] = useState(task?.notes || "")
  const [flagged, setFlagged] = useState(task?.flagged)
  const [done, setDone] = useState(false)
  const [edit, setEdit] = useState(visibleTask || false)
  const collectionPath = "task"
  const { id } = useParams()
  const categoryId = id
  const updatedAt = Date.now()

  // was values changed ?
  const valuesChanged = () => {
    if (
      text !== task?.text ||
      notes !== task?.notes ||
      flagged !== task?.flagged ||
      done !== task?.done
    ) {
      return true
    } else {
      return false
    }
  }

  // Change checkbox
  const changeTaskdone = event => {
    setDone(event.target.checked)
    if (task?.text !== undefined) {
      const id = task?.id
      const values = { done, text, notes, updatedAt, flagged }

      updateRecord({
        collectionPath,
        id,
        values,
      })
    }
  }

  // Press enter on Input
  const pressEnter = e => {
    if (e.keyCode === 13) {
      const values = {
        text,
        notes,
        flagged,
        done,
        categoryId,
      }
      // Check, if task new
      if (task?.text === undefined && text?.length > 0) {
        addRecord({
          collectionPath,
          values,
        })
        // Make updateRecord with data of task
      } else {
        if (valuesChanged() && text?.length > 0) {
          const id = task?.id
          updateRecord({
            collectionPath,
            id,
            values,
          })
        }
      }
      // Hide form and empty TaskCombined
      setVisibleTask(false)
      setEdit(false)
    }
  }

  // remove Task
  const removeTask = () => {
    const id = task?.id
    removeRecord({ collectionPath, id })
  }

  // change Flagged
  const changeTaskFlagged = () => {
    setFlagged(!flagged)
    if (task?.text !== undefined) {
      const id = task?.id
      const values = { done, text, notes, updatedAt, flagged }
      updateRecord({
        collectionPath,
        id,
        values,
      })
    }
  }

  return (
    <TaskCombinedStyled data-testid="TaskCombinedStyled">
      <TaskCombinedLeft data-testid="TaskCombinedLeft" className="mr-lg">
        <Checkbox
          bgColor="lightBlue"
          checked={done}
          onChange={changeTaskdone}
        />
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
                  autoFocus
                  onKeyDown={pressEnter}
                  value={text}
                  onChange={e => setText(e.currentTarget.value)}
                />
                <Input
                  type="text"
                  variant="outlined"
                  size="xxsm"
                  color="secondary"
                  placeholder="Notes"
                  onChange={e => setNotes(e.currentTarget.value)}
                  value={notes}
                  onKeyDown={pressEnter}
                />
              </>
            ) : (
              <TaskCombinedTextWrapper
                data-testid="TaskCombinedTextWrapper"
                onClick={() => setEdit(!edit)}>
                <Text size="sm">{task?.text}</Text>
                {task?.notes?.length > 0 && (
                  <Text size="xxsm" color="gray">
                    {task?.notes}
                  </Text>
                )}
              </TaskCombinedTextWrapper>
            )}
          </TaskCombinedInputTextWrapper>
          <TaskCombinedButtonWrapper data-testid="TaskCombinedButtonWrapper">
            <Button
              borderType="none"
              size="xxsm"
              onClick={() => changeTaskFlagged()}
              flagged={flagged}
              icon={<BsFillFlagFill />}
            />
            <Button
              borderType="none"
              type="button"
              onClick={removeTask}
              size="xxsm"
              color="gray"
              icon={<AiOutlineClose />}
            />
          </TaskCombinedButtonWrapper>
        </Divider>
      </TaskCombinedRight>
    </TaskCombinedStyled>
  )
}

export default TaskCombined
