import { useReducer, useState } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import { useAddRecord, useRemoveRecord, useUpdateRecord } from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])

  const [editStr, setEditStr] = useState(false)

  const addRecord = useAddRecord(dispatch)
  const removeRecord = useRemoveRecord(dispatch)
  const updateRecord = useUpdateRecord(store, dispatch)

  return (
    <StoreContext.Provider
      value={{ store, addRecord, removeRecord, updateRecord, editStr, setEditStr }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
