const updateCategory = (state, payload) => {
  const { id, name, updatedAt } = payload
  state.category.map(item => {
    if (item.id === id) {
      item.name = name
      item.updatedAt = updatedAt
    }

    return item
  })

  console.table("category", state.category)

  return { ...state }
}

export default updateCategory
