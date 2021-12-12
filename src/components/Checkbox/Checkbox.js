import { CheckboxWrapper, LabelWrapper } from "./Checkbox.styled"

const Checkbox = props => {
  const { checked, color, icon, className } = props

  return (
    <>
      <CheckboxWrapper  />
      <LabelWrapper
        checked={checked}
        color={color}
        className={className}
      />
    </>
  )
}

export default Checkbox
