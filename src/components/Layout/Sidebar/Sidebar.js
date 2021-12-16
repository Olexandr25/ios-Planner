// Styled variables
import { SidebarStyled, ButtonContainer } from "./Sidebar.styled"
// Micro - components
import { Input, Row, Col, Switcher, Text, Button } from "components"
// Domain - component
import { CategoryCombined } from "domains/Categories/components"
// Icons
import { AiOutlineSearch } from "react-icons/ai"
import {
  BsFillInboxFill,
  BsCalendar3,
  BsCalendarDate,
  BsFillFlagFill,
  BsPlusCircle,
} from "react-icons/bs"

const Sidebar = () => {
  return (
    <SidebarStyled data-testid="Sidebar">
      {/* Input search */}
      <Input
        variant="styled"
        icon={<AiOutlineSearch />}
        placeholder="Search"
        type="search"
        className="mb-xl ml-md mr-md"
      />
      {/* Switcher */}
      <Row className="m-zero">
        <Col className="p-zero">
          <Switcher icon={<BsCalendarDate />} length={4}>
            Today
          </Switcher>
        </Col>
        <Col className="p-zero">
          <Switcher icon={<BsCalendar3 />} length={4} bgColorIcon="red">
            Scheduled
          </Switcher>
        </Col>
        <Col className="p-zero">
          <Switcher icon={<BsFillInboxFill />} length={8} bgColorIcon="gray">
            All
          </Switcher>
        </Col>
        <Col className="p-zero">
          <Switcher icon={<BsFillFlagFill />} length={1} bgColorIcon="orange">
            Flagged
          </Switcher>
        </Col>
      </Row>
      <Text
        size="xxsm"
        fontWeight="semibold"
        color="secondary"
        className="ml-xl">
        My Lists
      </Text>
      <Row>
        <Col>
          <CategoryCombined isEditableStr={true} length={15} />
          <CategoryCombined isEditableStr={false} length={2} />
        </Col>
      </Row>
      <ButtonContainer>
        <Button
          type="button"
          icon={<BsPlusCircle />}
          size="xxsm"
          borderType="none"
          color="gray"
          fontWeight="regular">
          Add List
        </Button>
      </ButtonContainer>
    </SidebarStyled>
  )
}

export default Sidebar
