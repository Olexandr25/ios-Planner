// Styled - variables
import {
  CategoryCombinedStyled,
  CategoryLeft,
  CategoryRight,
} from "./CategoryCombined.styled"
// React - icons
import { AiOutlineClose, AiOutlineUnorderedList } from "react-icons/ai"
import { IconModule, Text, Input, Button } from "components"
import { useStore } from "contexts"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const CategoryCombined = props => {
  const { className, name, id } = props
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(name)
  const navigate = useNavigate()
  const { updateRecord, removeRecord, store } = useStore()

  let x = 0
  store?.task?.map(item => (item?.categoryId === id ? x++ : null))

  // Update category
  const onSubmit = e => {
    e?.preventDefault()
    const values = {}
    const updatedAt = new Date()
    const collectionPath = "category"

    values.id = id
    values.name = editText
    values.updatedAt = updatedAt

    updateRecord({ collectionPath, id, values })
    setEdit(!edit)
  }

  // Show/Hide input for updating Category
  const changeSimpleType = () => {
    setEdit(!edit)
    onSubmit()
  }

  // navigation between categories
  const navigation = () => {
    navigate(`category/${id}`)
  }

  const RemoveCategory = () => {
    const collectionPath = "category"
    removeRecord({ collectionPath, id })
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
          {x}
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
