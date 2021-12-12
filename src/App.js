import "./styles/styles.css"
import {
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from "react-icons/ai"
import { FaRegDotCircle } from "react-icons/fa"
// import { BsPlusCircle } from "react-icons/bs"
import { Button } from "components/Buttons"
import { Title } from "components/Title"
import { Text } from "components/Text"
import { Checkbox } from "components/Checkbox"
import { Container, Row, Col } from "components/Grid"
import { IconModule } from "components/IconModule"

function App() {
  return (
    <div className="App">
      {/* Buttons */}
      <Button type="button" icon={<AiOutlineUnorderedList />} >Text for Button</Button>
      <Button type="button" fontWeight="medium" >Text for Button</Button>
      <Button type="button" fontWeight="regular" >Text for Button</Button>
      {/* Title */}
      <Title>h1. Ant Design</Title>
      <Title level={2} color="blue">h2. Ant Design</Title>
      <Title level={3} color="red">h3. Ant Design</Title>
      <Title level={4} color="orange">h4. Ant Design</Title>
      <Title level={5} color="secondary">h5. Ant Design</Title>
      {/* Text */}
      <Text>Christmas</Text>
      <Text color="red" fontWeight="medium">Christmas</Text>
      <Text size="xxxl">Christmas</Text>
      {/* Checkbox */}
      <Checkbox icon={<FaRegDotCircle />} />
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
