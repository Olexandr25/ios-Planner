import { Item } from "./Counter.styled"
const Counter = props => {
  const { color, fs, fw } = props
  return (
    <>
      <Item color={color} fs={fs} fw={fw}>{props.children}</Item>
    </>
  )
}

export default Counter
