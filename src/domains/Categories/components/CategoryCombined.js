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
// Context
import { useStore } from "contexts"
// React hook
import { useState } from "react"
// Hooks of Category
import { SimpleUpdateValue } from "../hooks"
// react-router-dom
import { useNavigate } from "react-router-dom"

const CategoryCombined = props => {
  const { className, length, text, id } = props
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(text)
  const navigate = useNavigate()

  const { removeRecord, updateRecord } = useStore()

  // function for update text for Category
  const { onSubmit } = SimpleUpdateValue(
    updateRecord,
    setEdit,
    id,
    editText,
    edit
  )

  const changeSimpleType = () => {
    setEdit(!edit)
  }

  const navigation = () => {
    navigate(id)
  }

  const removeCategory = () => {
    removeRecord(id)
  }

  return (
    <CategoryCombinedStyled
      data-testid="CategoryCombinedStyled"
      tabIndex={1}
      className={className}
      onSubmit={onSubmit}
      onClick={() => navigation()}>
      <CategoryLeft data-testid="CategoryLeft">
        <IconModule className="mr-lg">
          <AiOutlineUnorderedList />
        </IconModule>
        {edit ? (
          <Input
            variant="classic"
            value={editText}
            onChange={e => setEditText(e.currentTarget.value)}
            onBlur={changeSimpleType}
            autofocus
          />
        ) : (
          <Text size="xsm" onClick={() => changeSimpleType()}>
            {text}
          </Text>
        )}
      </CategoryLeft>
      <CategoryRight data-testid="CategoryRight">
        <Text size="xsm" color="gray" fontWeight="regular">
          {length}
        </Text>
        <Button
          type="button"
          onClick={() => removeCategory()}
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
