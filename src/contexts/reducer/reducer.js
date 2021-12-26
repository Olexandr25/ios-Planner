import {
  updateCategory,
  addTask,
  updateTask,
  addRecord,
  updateRecord,
  removeRecord,
} from "."

const reducer = (state, action) => {
  const { type, payload } = action
  const stateCopy = JSON.parse(JSON.stringify(state))

  const actionsMap = {
    updateCategory,
    addTask,
    updateTask,
    addRecord,
    updateRecord,
    removeRecord,
  }

  return actionsMap[type](stateCopy, payload)
}

export default reducer
