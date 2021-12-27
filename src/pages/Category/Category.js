import { useParams, useNavigate } from "react-router-dom"
import { useStore } from "contexts"
import { useEffect } from "react"

import { PageLayout } from "components"
const Category = () => {
  const { id } = useParams()
  const { currentCategory, setCurrentCategory, store } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    const found = store.category.find(item => item.id === id)
    setCurrentCategory(found)
    if (!found) {
      navigate("/")
    }
  }, [store.category, id, setCurrentCategory, navigate])

  return (
    <PageLayout
      title={currentCategory?.name}
      count={0}
      titleColor="blue"
      createMode
    />
  )
}

export default Category
