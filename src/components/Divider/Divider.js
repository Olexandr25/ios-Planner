import { DividerStyled } from "./Divider.styled"

const Divider = ({ children, className }) => {
  return (
    <DividerStyled data-testid="divider" className={className}>
      {children}
    </DividerStyled>
  )
}

export default Divider
