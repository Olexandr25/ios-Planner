import { Container, Row, Col } from "components/Grid"
import { useEffect } from "react"
import { useStore } from "contexts"


const AppLayout = props => {
  const { aside, content } = props
  const { fetchDocuments } = useStore()


    useEffect(() => {
    fetchDocuments()
  }, [])

  return (
    <Container>
      <Row className="h-inherit">
        <Col variant={3} className="h-inherit">
          {aside}
        </Col>
        <Col variant={9}>{content}</Col>
      </Row>
    </Container>
  )
}

export default AppLayout
