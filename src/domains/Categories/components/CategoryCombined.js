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
// react-router-dom
import { useNavigate, Link } from "react-router-dom"

const CategoryCombined = props => {
  const { className, length, name, id } = props
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(name)
  const navigate = useNavigate()
  const { updateCategory, removeCategory } = useStore()

  // Update category
  const onSubmit = e => {
    e.preventDefault()
    const updatedAt = new Date()
    updateCategory(id, editText, updatedAt)
    setEdit(!edit)
  }

  // Show/Hide input for updating Category
  const changeSimpleType = () => {
    setEdit(!edit)
  }

  // FIXME: not working navigation
  const navigation = () => {
    navigate(`category/${id}`)
  }

  const RemoveCategory = () => {
    removeCategory(id)
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
            {name}
          </Text>
        )}
      </CategoryLeft>
      <CategoryRight data-testid="CategoryRight">
        <Text size="xsm" color="gray" fontWeight="regular">
          {length}
        </Text>
        <Link to="/">
          <Button
            type="button"
            onClick={() => RemoveCategory()}
            size="xxsm"
            borderType="none"
            icon={<AiOutlineClose />}
            color="gray"
          />
        </Link>
      </CategoryRight>
    </CategoryCombinedStyled>
  )
}

export default CategoryCombined
