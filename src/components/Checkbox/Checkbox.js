import { CheckboxStyled } from "./Checkbox.styled"

const Checkbox = props => {
  const { bgColor, size, onClick, className } = props

  return (
    <CheckboxStyled
      data-testid="checkbox"
      bgColor={bgColor}
      size={size}
      className={className}
      onClick={onClick ? () => onClick() : null}
    />
  )
}

export default Checkbox
