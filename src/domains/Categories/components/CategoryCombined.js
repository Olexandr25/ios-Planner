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

const CategoryCombined = props => {
  const { className, length, text, id } = props
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(text)

  const { removeRecord, updateRecord, store } = useStore()

  const onSubmit = e => {
    e.preventDefault()
    // setEditText(e.currentTarget.value)
    updateRecord(id, editText)
    setEdit(!edit)
    console.log(store)
  }

  const onBlur = () => {
    setEdit(!edit)
  }

  return (
    <CategoryCombinedStyled
      data-testid="CategoryCombinedStyled"
      tabIndex={1}
      className={className}
      onSubmit={onSubmit}>
      <CategoryLeft data-testid="CategoryLeft">
        <IconModule className="mr-lg">
          <AiOutlineUnorderedList />
        </IconModule>
        {edit ? (
          <Input
            variant="classic"
            value={editText}
            onChange={e => setEditText(e.currentTarget.value)}
            onBlur={onBlur}
          />
        ) : (
          <Text size="xsm" onClick={() => setEdit(!edit)}>
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
          onClick={() => removeRecord(id)}
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
