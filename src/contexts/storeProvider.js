import { useReducer } from "react"
import { StoreContext } from "."
import { reducer } from "./reducer"
import { useAddRecord } from "./hooks"

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {
    categories: [],
    tasks: [],
  })

  const addRecord = useAddRecord(dispatch)

  return (
    <StoreContext.Provider value={{ store, addRecord }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
