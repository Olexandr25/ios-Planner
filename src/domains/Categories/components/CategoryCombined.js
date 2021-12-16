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
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "inherit",
          justifyContent: "space-between",
          paddingLeft: "4px",
          marginBottom: "4px"
        }}>
        <div style={{ display: "flex", width: "inherit" }}>
          <IconModule className="mr-lg">
            <AiOutlineUnorderedList />
          </IconModule>
          {isEditableStr ? (
            <Input variant="classic" />
          ) : (
            <Text size="xsm">New List</Text>
          )}
        </div>
        <div style={{ display: "flex" }}>
          <Text size="xsm" color="secondary" fontWeight="regular">
            {length}
          </Text>
          <Button
            size="xxsm"
            borderType="none"
            icon={<AiOutlineClose />}
            color="secondary"
          />
        </div>
      </div>

      {/* <CategoryCombinedStyled
        data-testid="CategoryCombined"
        className={className}>
        <CategoryLeft data-testid="CategoryLeft">
          <IconModule>
            <AiOutlineUnorderedList />
          </IconModule>
          {isEditableStr ? (
            <Input variant="classic" className="ml-lg" />
          ) : (
            <Text size="xsm" className="ml-lg">
              New List
            </Text>
          )}
        </CategoryLeft>
        <CategoryRight data-testid="CategoryRight">
          <Text size="xsm" color="secondary" fontWeight="regular">
            {length}
          </Text>
          <Button
            size="xxsm"
            borderType="none"
            icon={<AiOutlineClose />}
            color="secondary"
          />
        </CategoryRight>
      </CategoryCombinedStyled> */}
    </>
  )
}

export default CategoryCombined
