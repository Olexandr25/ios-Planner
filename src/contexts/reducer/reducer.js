import { addCategory, updateCategory, removeCategory, addTask } from "."

const reducer = (state, action) => {
  const { type, payload } = action
  const stateCopy = JSON.parse(JSON.stringify(state))

  const actionsMap = {
    addCategory,
    updateCategory,
    removeCategory,
    addTask,
  }

  return actionsMap[type](stateCopy, payload)
}

export default reducer
