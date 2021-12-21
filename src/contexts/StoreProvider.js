import { useReducer, useEffect, useState } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import {
  useAddRecord,
  useRemoveRecord,
  useUpdateRecord,
  useFetchDocuments,
} from "./hooks"
import { firestoreService } from "services"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])

  const addRecord = useAddRecord(dispatch)
  const removeRecord = useRemoveRecord(dispatch)
  const updateRecord = useUpdateRecord(store, dispatch)
  const fetchDocuments = useFetchDocuments(dispatch)

  const { queryDocuments } = firestoreService
  queryDocuments("category")

  useEffect(() => {
    fetchDocuments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [currentRoute, setCurrentRoute] = useState("/")

  console.log(store)
  return (
    <StoreContext.Provider
      value={{
        store,
        addRecord,
        removeRecord,
        updateRecord,
        fetchDocuments,
        currentRoute,
        setCurrentRoute,
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
