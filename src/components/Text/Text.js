import { TextStyled } from "./Text.styled"

const Text = props => {
  const { color, size, fontWeight, className, children } = props

  return (
    <TextStyled
      color={color}
      size={size}
      fontWeight={fontWeight}
      className={className}>
      {children}
    </TextStyled>
  )
}

export default Text
