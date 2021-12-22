import { useReducer, useEffect, useState } from "react"
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
  const [currentCategory, setCurrentCategory] = useState()
  const [state, setState] = useState()

  const addRecord = useAddRecord(dispatch)
  const removeRecord = useRemoveRecord(dispatch)
  const updateRecord = useUpdateRecord(store, dispatch)
  const fetchDocuments = useFetchDocuments(dispatch) // fetch - category

  useEffect(() => {
    fetchDocuments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        state,
        setState,
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
