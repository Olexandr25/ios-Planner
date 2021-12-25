const removeCategory = (state, payload) => {
  const { id } = payload

  const removeIndex = state.category.findIndex(item => item.id === id)
  state.category.splice(removeIndex, 1)

  return { ...state }
}

export default removeCategory
