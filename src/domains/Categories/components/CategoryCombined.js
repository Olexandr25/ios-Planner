// Styled - variables
import {
  CategoryCombinedStyled,
  CategoryLeft,
  CategoryRight,
} from "./CategoryCombined.styled"
// Micro - component
import { IconModule, Text, Input, Button } from "components"
// React - icons
import { AiOutlineClose, AiOutlineUnorderedList } from "react-icons/ai"

const CategoryCombined = props => {
  const { className, isEditableStr, length } = props
  

  return (
    <CategoryCombinedStyled data-testid="CategoryCombinedStyled" tabIndex={1} className={className}>
      <CategoryLeft data-testid="CategoryLeft">
        <IconModule className="mr-lg">
          <AiOutlineUnorderedList />
        </IconModule>
        {isEditableStr ? (
          <Input variant="classic" />
        ) : (
          <Text size="xsm">New List</Text>
        )}
      </CategoryLeft>
      <CategoryRight data-testid="CategoryRight">
        <Text size="xsm" color="gray" fontWeight="regular">
          {length}
        </Text>
        <Button
          type="button"
          size="xxsm"
          borderType="none"
          icon={<AiOutlineClose />}
          color="gray"
        />
      </CategoryRight>
    </CategoryCombinedStyled>
  )
}

export default CategoryCombined
