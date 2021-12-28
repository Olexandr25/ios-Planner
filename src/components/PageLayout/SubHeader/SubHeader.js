import { Title } from "components"

const SubHeader = ({ children }) => {
  return (
    <Title level="4" color="blue">
      {children}
    </Title>
  )
}

export default SubHeader
