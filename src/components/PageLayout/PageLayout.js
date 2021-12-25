import { PageHeader, PageContent, Container, Row, Col } from "components"
import { PageLayoutStyled } from "./PageLayout.styled"
import { useParams, useNavigate } from "react-router-dom"
import { useStore } from "contexts"
import { useEffect } from "react"

const PageLayout = () => {
  const { id } = useParams()
  const { currentCategory, setCurrentCategory, store } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    const found = store.category.find(item => item.id === id)
    setCurrentCategory(found)
    if (!found) {
      navigate("/")
    }
  }, [store.category, id, setCurrentCategory, navigate])

  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Container>
          <Col variant={12}>
            <PageHeader title={currentCategory?.name} />
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
