// Styled variables
import { SidebarStyled, SwitcherContainer } from "./Sidebar.styled"
// Micro - components
import { Container, Row, Col } from "components/Grid"
import { Input } from "components/Input"
import { Switcher } from "components/Switcher"
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
        className="mb-xl"
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
      Category
    </SidebarStyled>
  )
}

export default Sidebar
