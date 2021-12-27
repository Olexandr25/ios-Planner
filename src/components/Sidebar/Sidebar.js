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
import { useStore } from "contexts"

const Sidebar = () => {
  const { store, addRecord } = useStore()
  const categoryList = store.category

  const createCategory = () => {
    addRecord({ collectionPath: "category" })
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
              <Switcher icon={<BsCalendarDate />} length={4}
              bgColor="blue">
                Today
              </Switcher>
            </Col>
            <Col className="p-zero">
              <Switcher icon={<BsCalendar3 />} length={4} bgColorIcon="red"
              bgColor="red">
                Scheduled
              </Switcher>
            </Col>
          </Row>
          <Row className="m-zero">
            <Col className="p-zero">
              <Switcher
                icon={<BsFillInboxFill />}
                length={8}
                bgColorIcon="gray"
                bgColor="gray">
                All
              </Switcher>
            </Col>
            <Col className="p-zero">
              <Switcher
                icon={<BsFillFlagFill />}
                length={1}
                bgColorIcon="orange"
                bgColor="orange">
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
          {categoryList.map(category => {
            return (
              <CategoryCombined
                key={category?.id}
                id={category?.id}
                name={category?.name}
                // FIXME: fixe length of category
                // store.tasks.map(item => item.categoryId === id)
                length={0}
                category={category}
              />
            )
          })}
        </Col>
        <Col variant={12}>
          <ButtonContainer>
            <Button
              onClick={() => createCategory()}
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
