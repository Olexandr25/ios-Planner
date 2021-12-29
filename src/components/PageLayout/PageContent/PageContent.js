import { Row, Col, Content } from "components"
import { SubHeader } from "components"
import { PageContentStyled } from "./PageContent.styled"
import { useStore } from "contexts"

const PageContent = ({
  showTaskForm,
  setShowTaskForm,
  TasksFlagged,
  TasksCategory,
  TasksAll,
}) => {
  const { store } = useStore()

  const SwitcherAll = state => {
    const result = state?.category?.map(category => {
      let CategoryId = category?.id
      let CategoryName = category?.name
      return (
        <Row key={category?.id}>
          <Col variant={12}>
            <SubHeader key={category?.id}>{CategoryName}</SubHeader>
          </Col>
          <Col variant={12}>
            {state?.task?.map(
              task =>
                CategoryId === task?.categoryId && (
                  <Content ItemTask={task} TasksAll={TasksAll} />
                )
            )}
          </Col>
        </Row>
      )
    })

    return result
  }

  return (
    <PageContentStyled data-testid="PageContentStyled">
      {TasksAll === true ? (
        <>{SwitcherAll(store)}</>
      ) : (
        <Col variant={12}>
          <Content TasksFlagged={TasksFlagged} TasksCategory={TasksCategory} />
        </Col>
      )}
    </PageContentStyled>
  )
}

export default PageContent
