import { useReducer, useEffect, useState } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import {
  useAddRecord,
  useRemoveRecord,
  useUpdateRecord,
  useFetchDocuments,
  useAddTask,
} from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])
  const [currentCategory, setCurrentCategory] = useState()
  const [visibilityTaskCombined, setVisibilityTaskCombined] = useState(false)

  const addRecord = useAddRecord(dispatch)
  const removeRecord = useRemoveRecord(dispatch)
  const updateRecord = useUpdateRecord(store, dispatch)
  const fetchDocuments = useFetchDocuments(dispatch) // fetch - category

  const addTask = useAddTask(dispatch)

  useEffect(() => {
    fetchDocuments(`category`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.table("store", store)

  return (
    <StoreContext.Provider
      value={{
        store,
        addRecord,
        removeRecord,
        updateRecord,
        fetchDocuments,
        currentCategory,
        setCurrentCategory,
        visibilityTaskCombined,
        setVisibilityTaskCombined,
        addTask
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
