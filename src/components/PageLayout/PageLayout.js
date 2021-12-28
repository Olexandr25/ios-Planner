import { PageHeader, PageContent, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"
import { useStore } from "contexts"

const PageLayout = ({
  title,
  count,
  titleColor,
  showCount,
  TasksFlagged,
  TasksCategory,
}) => {
  const { setVisibleTask } = useStore()

  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Col variant={12}>
          <PageHeader
            title={title}
            count={count}
            titleColor={titleColor}
            setVisibleTask={setVisibleTask}
            showCount={showCount}
          />
        </Col>
      </Row>
      <Row>
        <Col variant={12}>
          <PageContent
            TasksFlagged={TasksFlagged}
            TasksCategory={TasksCategory}
          />
        </Col>
      </Row>
    </PageLayoutStyled>
  )
}

export default PageLayout
