// Styled variables
import { SidebarStyled, SwitcherContainer } from "./Sidebar.styled"
// Micro - components
import { Input, Col, Switcher, Text } from "components"
// Domain - component
import { CategoryCombined } from "domains/Categories/components"
// Icons
import { AiOutlineSearch } from "react-icons/ai"
import {
  BsFillInboxFill,
  BsCalendar3,
  BsCalendarDate,
  BsFillFlagFill,
} from "react-icons/bs"

const Sidebar = () => {
  return (
    <SidebarStyled data-testid="sidebar">
      {/* Input search */}
      <Input
        variant="styled"
        icon={<AiOutlineSearch />}
        placeholder="Search"
        type="search"
        className="mb-xl ml-md mr-md"
      />
      {/* Switcher */}
      <SwitcherContainer data-testid="SwitcherContainer">
        <Col>
          <Switcher icon={<BsCalendarDate />} length={4}>
            Today
          </Switcher>
        </Col>
        <Col>
          <Switcher icon={<BsCalendar3 />} length={4} bgColorIcon="red">
            Scheduled
          </Switcher>
        </Col>
      </SwitcherContainer>
      <SwitcherContainer data-testid="SwitcherContainer" className="mb-xl">
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
      </SwitcherContainer>
      {/* Category */}
      <Text
        size="xxsm"
        fontWeight="semibold"
        color="secondary"
        className="ml-xl">
        My Lists
      </Text>
      <CategoryCombined isEditableStr={true} length={15} />
      <CategoryCombined isEditableStr={false} length={1} />
      <CategoryCombined />
    </SidebarStyled>
  )
}

export default Sidebar
