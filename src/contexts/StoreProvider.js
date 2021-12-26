import { useReducer, useState } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import {
  useUpdateCategory,
  useAddTask,
  useUpdateTask,
  useRemoveRecord,
  useAddRecord,
  useUpdateRecord,
} from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, { category: [], task: [] })

  // Create/Update/Remove --- Category
  const updateCategory = useUpdateCategory(store, dispatch)

  // Create/Update/Remove --- Task
  const addTask = useAddTask(dispatch)
  const updateTask = useUpdateTask(store, dispatch)

  // CRUD --- Record
  const addRecord = useAddRecord(dispatch)
  const updateRecord = useUpdateRecord(dispatch)
  const removeRecord = useRemoveRecord(dispatch)

  const [currentCategory, setCurrentCategory] = useState()
  const [visibleTask, setVisibleTask] = useState(false)

  console.table("store", store)

  return (
    <StoreContext.Provider
      value={{
        store,
        updateCategory,
        currentCategory,
        setCurrentCategory,
        visibleTask,
        setVisibleTask,
        addTask,
        updateTask,

        // CRUD - Record
        addRecord,
        updateRecord,
        removeRecord,
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
