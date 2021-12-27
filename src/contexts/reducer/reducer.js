import { addRecord, updateRecord, removeRecord, updateData } from "."

const reducer = (state, action) => {
  const { type, payload } = action
  const stateCopy = JSON.parse(JSON.stringify(state))
  
  const actionsMap = {
    addRecord,
    updateRecord,
    removeRecord,
    updateData,
  }

  return actionsMap[type](stateCopy, payload)
}

export default reducer
