import { addRecord, removeRecord, updateData } from "."

const reducer = (state, action) => {
  const { type, payload } = action
  const stateCopy = JSON.parse(JSON.stringify(state))

  const actionsMap = {
    addRecord,
    removeRecord,
    updateData
  }

  return actionsMap[type](stateCopy, payload)
}

export default reducer
