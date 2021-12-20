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

const CategoryCombined = props => {
  const { className, length, text, id } = props
  const [edit, setEdit] = useState(false)

  const { removeRecord } = useStore()
  const onSubmit = e => {
    console.log(e.target.value)
  }

  const onBlur = () => {
    show()
  }

  const show = () => {
    console.log(edit)
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
            onChange={e => console.log(e.target.value)}
            onBlur={onBlur}
          />
        ) : (
          <Text size="xsm" onClick={() => show()}>
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
