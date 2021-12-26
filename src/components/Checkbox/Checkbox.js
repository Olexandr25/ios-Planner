import { CheckboxStyled } from "./Checkbox.styled"

const Checkbox = props => {
  const { bgColor, size, onClick, className, ...rest } = props

  return (
    <CheckboxStyled
      data-testid="checkbox"
      bgColor={bgColor}
      size={size}
      className={className}
      onClick={onClick}
      {...rest}
    />
  )
}

export default Checkbox
