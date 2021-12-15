import { DividerStyled } from "./Divider.styled"

const Divider = ({ children }) => {
  return <DividerStyled data-testid="divider">{children}</DividerStyled>
}

export default Divider
