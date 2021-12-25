import { TextStyled } from "./Text.styled"

const Text = props => {
  const { color, size, fontWeight, className, children, onClick } = props

  return (
    <TextStyled
      data-testid="Text"
      color={color}
      size={size}
      fontWeight={fontWeight}
      className={className}
      onClick={onClick}>
      {children}
    </TextStyled>
  )
}

export default Text
