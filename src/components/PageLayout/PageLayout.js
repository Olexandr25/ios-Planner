import { PageHeader, PageContent, Container, Row, Col } from "components"
import { useStore } from "contexts"
import { PageLayoutStyled } from "./PageLayout.styled"
import { useNavigate } from "react-router-dom"

const PageLayout = props => {
  const { currentCategory } = props
  const { currentRoute, setCurrentRoute } = useStore()
  const navigate = useNavigate()

  const switchRoute = () => {
    if (currentRoute === "/") {
      setCurrentRoute("/2")
      navigate("/2")
    } else {
      setCurrentRoute("/")
      navigate("/")
    }
    console.log(`currentRoute: ${currentRoute}`)
  }

  return (
    <PageLayoutStyled data-testid="PageLayout">
      <Row className="mb-xl">
        <Container>
          <Col variant={12}>
            <button onClick={() =>  switchRoute()}>change route</button>
            <PageHeader currentCategory={currentCategory} />
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
