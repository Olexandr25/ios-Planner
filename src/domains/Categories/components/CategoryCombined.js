// Styled - variables
import { CategoryCombinedStyled } from "./CategoryCombined.styled"
// Micro - component
import { IconModule, Text, Input, Row, Col, Button } from "components"
// React - icons
import { AiOutlineClose, AiOutlineUnorderedList } from "react-icons/ai"

const CategoryCombined = props => {
  const { className, isEditableStr, length } = props

  return (
    <CategoryCombinedStyled
      data-testid="CategoryCombinedStyled"
      className={className}>
      <Row>
        <Col variant={1}>
          <IconModule>
            <AiOutlineUnorderedList />
          </IconModule>
        </Col>
        <Col variant={8}>
          {isEditableStr ? (
            <Input variant="classic" className="ml-lg" />
          ) : (
            <Text size="xsm" className="ml-lg">
              New List
            </Text>
          )}
        </Col>
        <Col variant={1} className="ml-xl">
          <Text size="xsm" color="secondary" fontWeight="regular">
            {length}
          </Text>
        </Col>
        <Col variant={1}>
          <Button
            size="xxsm"
            borderType="none"
            icon={<AiOutlineClose />}
            color="secondary"
          />
        </Col>
      </Row>
    </CategoryCombinedStyled>
  )
}

export default CategoryCombined
