// Styled variables
import {
  SidebarStyled,
  SwitcherContainer,
  ButtonContainer,
} from "./Sidebar.styled"
// Micro - components
import { Input, Container, Row, Col, Switcher, Text, Button } from "components"
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
        {/* <SwitcherContainer data-testid="SwitcherContainer"> */}
        <Row>
          <Col variant={6}>
            <Switcher icon={<BsCalendarDate />} length={4}>
              Today
            </Switcher>
          </Col>

          <Col>
            <Switcher icon={<BsCalendar3 />} length={4} bgColorIcon="red">
              Scheduled
            </Switcher>
          </Col>
        </Row>
        <Row>
          {/* </SwitcherContainer> */}
          {/* <SwitcherContainer data-testid="SwitcherContainer" className="mb-xl"> */}
          <Col>
            <Switcher icon={<BsFillInboxFill />} length={8} bgColorIcon="gray">
              All
            </Switcher>
          </Col>
          <Col>
            <Switcher icon={<BsFillFlagFill />} length={1} bgColorIcon="orange">
              Flagged
            </Switcher>
          </Col>
        </Row>
        {/* </SwitcherContainer> */}
        {/* Category */}
        <Text
          size="xxsm"
          fontWeight="semibold"
          color="secondary"
          className="ml-xl">
          My Lists
        </Text>
        <CategoryCombined isEditableStr={true} length={15} />
        <CategoryCombined isEditableStr={false} length={2} />
        <CategoryCombined />
        <ButtonContainer>
          <Button
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
