import "./styles/styles.css"
import {
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from "react-icons/ai"
// import { BsPlusCircle } from "react-icons/bs"
import { Button } from "components/Buttons"
import { Container, Row, Col } from "components/Grid"
import { IconModule } from "components/IconModule"

function App() {
  return (
    <div className="App">
      {/* Buttons */}
      <Button
        // icon={<AiOutlinePlus />}
        type="submit"
        color="blue"
        isHovered={true}
        isActive={true}
        borderType="none"
        borderRadius="lg"
        size="lg">
        Button
      </Button>
      <Button
        icon={<AiOutlinePlus />}
        borderRadius="lg"
        color="blue"
        isHovered={true}
        isActive={true}
        size="md"></Button>
      <Button
        icon={<AiOutlinePlus />}
        onClick={() => console.log("You clicked button")}
        borderRadius="lg"
        color="blue"
        isHovered={true}
        isActive={true}
        size="sm">
        Button
      </Button>
      {/* GRID */}
      <Container variant="container-fluid">
        <Row>
          <Col variant="col-4">Col - 1</Col>
          <Col variant="col-8">Col - 2</Col>
        </Row>
        <Row variant=""> Row - 2</Row>
        <Row>
          <Col>List</Col>
          <Col>List</Col>
          <Col>List</Col>
          <Col>List</Col>
        </Row>
        {/* Thursday */}
      </Container>
      <Container variant="container-fluid">
        <Row><Col>Container inside Row-Col</Col></Row>
        <Row>Container inside Row-component</Row>
        Container without components
      </Container>
      {/* IconModule */}
      <IconModule>
        <AiOutlineUnorderedList />
      </IconModule>
      <IconModule bgColor="red">
        <AiOutlineUnorderedList />
      </IconModule>
    </div>
  )
}

export default App
