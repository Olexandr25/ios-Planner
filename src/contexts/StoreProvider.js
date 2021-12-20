import { useReducer } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import {
  useAddRecord,
  useRemoveRecord,
  useUpdateRecord,
  useFetchDocuments,
} from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])

  const addRecord = useAddRecord(dispatch)
  const removeRecord = useRemoveRecord(dispatch)
  const updateRecord = useUpdateRecord(store, dispatch)
  const fetchDocuments = useFetchDocuments(dispatch)

  return (
    <StoreContext.Provider
      value={{ store, addRecord, removeRecord, updateRecord, fetchDocuments }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
