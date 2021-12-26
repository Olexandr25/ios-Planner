import { Row, Col } from "components"
import { TaskCombined } from "domains"
import { ContentStyled } from "./Contents.styled"
import { useStore } from "contexts"
import { useParams } from "react-router-dom"

const Content = () => {
  const { store } = useStore()
  const { id } = useParams()

  const taskList = store?.task?.filter(item => item?.categoryId === id)
  // console.table("taskListk", taskList)

  return (
    <ContentStyled data-testid="ContentStyled">
      <Row>
        <Col variant={12}>
          {taskList.map(task => {
            return <TaskCombined key={task.id} task={task} />
          })}
        </Col>
        {/* <Col variant={12}>{visibleTask ? <TaskCombined /> : <></>}</Col> */}
      </Row>
    </ContentStyled>
  )
}

export default Content
