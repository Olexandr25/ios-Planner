import React from "react"
import { Wrapper, Header, Content } from "./CategoryWrapper.styled"
import { CategoryCombined } from "."
import { Title } from "components/Title"

const CategoryWrapper = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Title fs="small" fw="bold" color="#9f9f9f">
            My List
          </Title>
        </Header>
        <Content>
            <CategoryCombined>
                {/*  */}
            </CategoryCombined>
        </Content>
      </Wrapper>
    </>
  )
}

export default CategoryWrapper
