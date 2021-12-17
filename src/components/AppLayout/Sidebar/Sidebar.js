// Styled variables
import { SidebarStyled, ButtonContainer } from "./Sidebar.styled"
// Micro - components
import { Input, Row, Col, Switcher, Text, Button } from "components"
// Domain - component
import { CategoryCombined } from "domains"
// Icons
import { AiOutlineSearch } from "react-icons/ai"
import {
  BsFillInboxFill,
  BsCalendar3,
  BsCalendarDate,
  BsFillFlagFill,
  BsPlusCircle,
} from "react-icons/bs"
// Context
import { useStore } from "contexts"

const Sidebar = () => {
  const { store, addRecord } = useStore()
  let idCategory = 0
  const addCategory = () => {
    console.log(store)
    addRecord({ id: idCategory++, text: "New List" })
  }

  return (
    <Row className="h-inherit">
      <SidebarStyled data-testid="Sidebar">
        {/* Input search */}
        <Col variant={12}>
          <Input
            variant="styled"
            icon={<AiOutlineSearch />}
            placeholder="Search"
            type="search"
            className="mb-xl ml-md mr-md"
          />
        </Col>
        {/* Switcher */}
        <Col variant={12}>
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
          </Row>
          <Row className="m-zero">
            <Col className="p-zero">
              <Switcher
                icon={<BsFillInboxFill />}
                length={8}
                bgColorIcon="gray">
                All
              </Switcher>
            </Col>
            <Col className="p-zero">
              <Switcher
                icon={<BsFillFlagFill />}
                length={1}
                bgColorIcon="orange">
                Flagged
              </Switcher>
            </Col>
          </Row>
        </Col>
        <Col variant={12}>
          <Text
            size="xxsm"
            fontWeight="semibold"
            color="secondary"
            className="ml-xl">
            My Lists
          </Text>
        </Col>
        {/* List of Categories */}
        <Col variant={12}>
          <CategoryCombined isEditableStr={true} length={15} />
          <CategoryCombined isEditableStr={false} length={2} />
        </Col>
        <Col variant={12}>
          <ButtonContainer>
            <Button
              onClick={() => addCategory()}
              type="button"
              icon={<BsPlusCircle />}
              size="xxsm"
              borderType="none"
              color="gray"
              fontWeight="regular">
              Add List
            </Button>
          </ButtonContainer>
        </Col>
      </SidebarStyled>
    </Row>
  )
}

export default Sidebar
