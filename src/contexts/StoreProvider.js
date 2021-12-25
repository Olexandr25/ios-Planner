import { useReducer, useState } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import { useAddCategory, useUpdateCategory, useRemoveCategory } from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, { category: [], task: [] })

  // Create/Update/Remove --- Category
  const addCategory = useAddCategory(dispatch)
  const updateCategory = useUpdateCategory(store, dispatch)
  const removeCategory = useRemoveCategory(dispatch)

  const [currentCategory, setCurrentCategory] = useState()
  // const [visibilityTaskCombined, setVisibilityTaskCombined] = useState(false)

  console.table("store", store)

  return (
    <StoreContext.Provider
      value={{
        store,
        addCategory,
        updateCategory,
        removeCategory,
        currentCategory,
        setCurrentCategory,
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
