import { Row, Col } from "components"
import { TaskCombined } from "domains"
import { ContentStyled } from "./Contents.styled"
import { useStore } from "contexts"
import { useParams } from "react-router-dom"

const Content = () => {
  const { store, visibleTask, setVisibleTask } = useStore()
  const { id } = useParams()

  const taskList = store.task

  return (
    <ContentStyled data-testid="ContentStyled">
      <Row>
        <Col variant={12}>
          {taskList?.map(
            task =>
              task.categoryId === id ? (
                <TaskCombined
                  key={task.id}
                  task={task}
                  visibleTask={visibleTask}
                  setVisibleTask={setVisibleTask}
                  createMode
                />
              ) : null
          )}
        </Col>
        <Col variant={12}>{visibleTask ? <TaskCombined /> : <></>}</Col>
      </Row>
    </ContentStyled>
  )
}

export default Content
