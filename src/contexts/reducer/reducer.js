import { addCategory, updateCategory, removeCategory } from "."

const reducer = (state, action) => {
  const { type, payload } = action
  const stateCopy = JSON.parse(JSON.stringify(state))

  const actionsMap = {
    addCategory,
    updateCategory,
    removeCategory,
  }

  return actionsMap[type](stateCopy, payload)
}

export default reducer
