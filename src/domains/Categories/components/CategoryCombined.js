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

const CategoryCombined = props => {
  const { className, editStr, length, text, id } = props
  const { setEditStr } = useStore()
  
  const { removeRecord } = useStore()
  const onSubmit = e => {
    console.log(e.target.value)
    
  }

  const onBlur = () => {
    // console.log(e.target.value)
    show()
  }

  const show = () => {
    console.log(editStr)
    setEditStr(!editStr)
  }

  return (
    <CategoryCombinedStyled
      data-testid="CategoryCombinedStyled"
      tabIndex={1}
      className={className}
      onSubmit={onSubmit}
      // onBlur={onBlur}
      >
      <CategoryLeft data-testid="CategoryLeft">
        <IconModule className="mr-lg">
          <AiOutlineUnorderedList />
        </IconModule>
        {editStr ? (
          <Input variant="classic" onChange={e => console.log(e.target.value)} onBlur={onBlur} />
        ) : (
          <Text size="xsm" onClick={()=>show()}>
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
