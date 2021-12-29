import { Row, Col } from "components"
import { TaskCombined } from "domains"
import { ContentStyled } from "./Contents.styled"
import { useStore } from "contexts"
import { useParams } from "react-router-dom"

const Content = ({ TasksFlagged, TasksCategory, TasksAll, ItemTask }) => {
  const { store, visibleTask, setVisibleTask } = useStore()
  const { id } = useParams()

  return (
    <ContentStyled data-testid="ContentStyled">
      <Row>
        <Col variant={12}>
          {TasksAll && (
            <TaskCombined
              task={ItemTask}
              visibleTask={visibleTask}
              setVisibleTask={setVisibleTask}
            />
          )}
          {TasksFlagged &&
            store?.task?.map(
              task =>
                task?.flagged && (
                  <TaskCombined
                    key={task.id}
                    task={task}
                    visibleTask={visibleTask}
                    setVisibleTask={setVisibleTask}
                  />
                )
            )}
          {TasksCategory &&
            store?.task?.map(task =>
              task?.categoryId === id ? (
                <TaskCombined
                  key={task.id}
                  task={task}
                  visibleTask={visibleTask}
                  setVisibleTask={setVisibleTask}
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
