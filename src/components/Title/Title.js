import { TitleStyled } from "./Title.styled"

const Title = props => {
  const { color, className, level, children } = props

  return (
    <TitleStyled color={color} level={level} className={className}>
      {children}
    </TitleStyled>
  )
}

export default Title
