import { useReducer, useState } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import { useAddRecord } from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, [])

  const [editStr, setEditStr] = useState(false)

  const addRecord = useAddRecord(dispatch)

  return (
    <StoreContext.Provider value={{ store, addRecord, editStr, setEditStr }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
