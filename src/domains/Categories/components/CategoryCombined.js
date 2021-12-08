import React from "react"
import { Counter } from "components/Counter"
import { Icon } from "components"
import { Input } from "components/Input"
import { Text } from "components/Text"
import { Button } from "components/Buttons"
import { AiOutlineUnorderedList, AiOutlineClose } from "react-icons/ai"
import { Body, Content, Right, Left } from "./CategoryCombined.styled"

const CategoryCombined = () => {
  return (
    <>
      {/* SimpleView */}
      <Body>
        <Left>
          <Icon>
            <AiOutlineUnorderedList />
          </Icon>
          <Content>
            <Text>New List</Text>
          </Content>
        </Left>
        <Right>
          <Button icon={<AiOutlineClose />} />
          <Counter>0</Counter>
        </Right>
      </Body>

      {/* SimpleForm */}
      <Body>
        <Left>
          <Icon>
            <AiOutlineUnorderedList />
          </Icon>
          <Content>
            <Input variant="classic" />
          </Content>
        </Left>
        <Right>
          <Button icon={<AiOutlineClose />} />
          <Counter>0</Counter>
        </Right>
      </Body>
    </>
  )
}

export default CategoryCombined
