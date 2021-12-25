import { useReducer, useState } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import { useAddCategory, useUpdateCategory, useRemoveCategory, useAddTask } from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, { category: [], task: [] })

  // Create/Update/Remove --- Category
  const addCategory = useAddCategory(dispatch)
  const updateCategory = useUpdateCategory(store, dispatch)
  const removeCategory = useRemoveCategory(dispatch)

  // Create/Update/Remove --- Task
  const addTask = useAddTask(dispatch)

  const [currentCategory, setCurrentCategory] = useState()
  const [visibleTask, setVisibleTask] = useState(false)

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
        visibleTask,
        setVisibleTask,
        addTask
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
