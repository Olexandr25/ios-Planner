const addCategory = (state, payload) => {
  state.category.push(payload)

  return { ...state }
}

export default addCategory
