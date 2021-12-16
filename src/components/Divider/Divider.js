import { DividerStyled } from "./Divider.styled"

const Divider = ({ children }) => {
  return <DividerStyled data-testid="DividerStyled">{children}</DividerStyled>
}

export default Divider
