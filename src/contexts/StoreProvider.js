import { useReducer, useState, useEffect } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import { useRemoveRecord, useAddRecord, useUpdateRecord } from "./hooks"
import { firestoreService } from "services"

const { queryDocuments } = firestoreService

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, { category: [], task: [] })

  // CRUD --- Record
  const addRecord = useAddRecord(dispatch)
  const updateRecord = useUpdateRecord(dispatch)
  const removeRecord = useRemoveRecord(dispatch)

  const [currentCategory, setCurrentCategory] = useState()
  const [visibleTask, setVisibleTask] = useState(false)
  const [dbCategory, setDbCategory] = useState([])
  const [dbTask, setDbTask] = useState([])

  useEffect(() => {
    const getData = async () => {
      const category = await queryDocuments("category")
      const task = await queryDocuments("task")

      setDbCategory(category)
      setDbTask(task)
      dispatch({ type: "updateData", payload: { category, task } })
    }

    getData()
  }, [])

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

        // data from db
        dbCategory,
        dbTask
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
