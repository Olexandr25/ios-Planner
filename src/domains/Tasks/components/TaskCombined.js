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

const TaskCombined = ({ task, createMode }) => {
  const { removeRecord, addRecord, updateRecord, setVisibleTask } = useStore()

  const [text, setText] = useState(task?.text)
  const [notes, setNotes] = useState(task?.notes)
  const [flagged, setFlagged] = useState(task?.flagged)
  const [status, setStatus] = useState(task?.status)
  const [edit, setEdit] = useState(true)
  const collectionPath = "task"
  const { id } = useParams()
  const categoryId = id


  const valuesChanged = () => {
    if (
      text !== task?.text ||
      notes !== task?.notes ||
      flagged !== task?.flagged ||
      status !== task?.status
    ) {
      return true
    } else {
      return false
    }
  }
  const valuesNotEmpty = () => {
    if (task?.length > 0) {
      return true
    }
  }
  const removeTask = () => {
    removeRecord({ collectionPath, id })
  }
  const changeEditMode = () => {
    setText(text)
    setNotes(notes)
    setFlagged(flagged)
    setStatus(status)
    setEdit(!edit)
  }
  const changeTaskFlagged = () => {
    if (edit) {
      setFlagged(!flagged)
    } else {
      const id = task?.id
      updateRecord({
        collectionPath,
        id,
        values: { flagged },
      })
    }
  }
  const changeTaskStatus = event => {
    if (edit) {
      console.log("checked ->", event.target.checked)
      setStatus(event.target.checked)
    } else {
      setStatus(event.target.checked)
      const id = task?.id
      updateRecord({
        collectionPath,
        id,
        values: { status },
      })
    }
  }

  // const handleBlur = event => {
  //   if (!event.currentTarget.contains(event.relatedTarget)) {
  //     const values = {
  //       text,
  //       notes,
  //       flagged,
  //       status,
  //       categoryId,
  //     }
  //     if (edit) {
  //       if (valuesNotEmpty()) {
  //       console.log("handleBlur___________")
  //       addRecord({
  //         collectionPath,
  //         values,
  //       })
  //       }
        
  //     } else if (!edit) {
  //       if (valuesChanged()) {
  //         const id = task?.id
  //         updateRecord({ collectionPath, id, values })
  //       }
  //       changeEditMode()
  //     }
  //   }
  // }
  const handleEnter = e => {
    if (e.key === "Enter") {
      // setVisibleTask(false)
      // setEdit(false)
      const values = {
        text,
        notes,
        flagged,
        status,
        categoryId
      }
      if (edit) {
        addRecord({
          collectionPath: "task",
          values,
        })

        setText("")
        setNotes("")
        setFlagged(false)
        setStatus(false)
      } else {
        console.log("handleEnter > else")
      }
    }
  }

  return (
    <TaskCombinedStyled data-testid="TaskCombinedStyled" >
      <TaskCombinedLeft data-testid="TaskCombinedLeft" className="mr-lg">
        <Checkbox
          bgColor="lightBlue"
          checked={status}
          onChange={changeTaskStatus}
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
                  onKeyDown={handleEnter}
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
                  onKeyDown={handleEnter}
                />
              </>
            ) : (
              <TaskCombinedTextWrapper
                data-testid="TaskCombinedTextWrapper"
                onClick={changeEditMode}>
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
