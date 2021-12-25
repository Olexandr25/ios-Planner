import {
  addCategory,
  updateCategory,
  removeCategory,
  addTask,
  updateTask,
} from "."

const reducer = (state, action) => {
  const { type, payload } = action
  const stateCopy = JSON.parse(JSON.stringify(state))

  const actionsMap = {
    addCategory,
    updateCategory,
    removeCategory,
    addTask,
    updateTask,
  }

  return actionsMap[type](stateCopy, payload)
}

export default reducer
