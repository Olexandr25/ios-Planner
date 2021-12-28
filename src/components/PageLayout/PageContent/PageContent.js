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
  const All = state => {
    const result = state?.category?.map(category => {
      let CategoryId = category?.id
      let CategoryName = category?.name
      console.log("All ******")
      return (
        <>
          <Row>
            <Col variant={12}>
              <SubHeader>{CategoryName}</SubHeader>
            </Col>
          </Row>
          <Row>
            <Col>
              <Content CategoryId={CategoryId} TasksAll={TasksAll} />
            </Col>
          </Row>
        </>
      )
    })
  }

  return (
    <PageContentStyled data-testid="PageContentStyled">
      {TasksAll === true ? (
        <>
          {All(store)}
        </>
      ) : (
        <Col variant={12}>
          <Content TasksFlagged={TasksFlagged} TasksCategory={TasksCategory} />
        </Col>
      )}
    </PageContentStyled>
  )
}

export default PageContent
