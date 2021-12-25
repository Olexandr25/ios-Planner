import {
  CompletedStyled,
  CompletedLeft,
  CompletedRight,
} from "./Completed.styled"
import { Text, Button, Divider } from "components"

const Completed = props => {
  const { length, color, className } = props

  return (
    <Divider>
      <CompletedStyled data-testid="CompletedStyled" className={className}>
        <CompletedLeft data-testid="CompletedLeft">
          <Text size="xxsm">{length} Completed</Text>
        </CompletedLeft>
        <CompletedRight data-testid="CompletedRight">
          <Button type="button" borderType="none" size="xxsm" color={color}>
            Show/Hide
          </Button>
        </CompletedRight>
      </CompletedStyled>
    </Divider>
  )
}

export default Completed
