import { addRecord, updateRecord, removeRecord } from "."

const reducer = (state, action) => {
  const { type, payload } = action
  const stateCopy = JSON.parse(JSON.stringify(state))

  const actionsMap = {
    addRecord,
    updateRecord,
    removeRecord,
  }

  return actionsMap[type](stateCopy, payload)
}

export default reducer
