import { useReducer, useState } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import {
  useRemoveRecord,
  useAddRecord,
  useUpdateRecord,
} from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, { category: [], task: [] })

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
        currentCategory,
        setCurrentCategory,
        visibleTask,
        setVisibleTask,


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
