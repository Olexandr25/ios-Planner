import { PageHeader, PageContent, Container, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"
import { useParams } from "react-router-dom"
import { useStore } from "contexts"
import { useEffect } from "react"

const PageLayout = () => {
  const { id } = useParams()
  const { currentCategory, setCurrentCategory, store } = useStore()

  useEffect(() => {
    const found = store.find(item => item.id === id)
    setCurrentCategory(found)
  }, [store, id, setCurrentCategory])

  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Container>
          <Col variant={12}>
            <PageHeader title={currentCategory?.text} />
          </Col>
          <Col variant={12}>
            <PageContent />
          </Col>
        </Container>
      </Row>
    </PageLayoutStyled>
  )
}

export default PageLayout
