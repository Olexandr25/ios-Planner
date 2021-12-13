import { CheckboxStyled } from "./Checkbox.styled"

const Checkbox = props => {
  const { bgColor, size, onClick, className } = props

  return (
    <CheckboxStyled
      bgColor={bgColor}
      size={size}
      className={className}
      onClick={onClick ? () => onClick() : null}
    />
  )
}

export default Checkbox
