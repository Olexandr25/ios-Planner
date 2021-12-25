const addTask = (state, payload) => {
  const { categoryId, id } = payload
  state.task.push(payload)
  state.category.map(category => {
    if (category.id === categoryId) {
      category.tasks.push(id)
      console.table('category', category)
    }

    return category
  })

  return { ...state }
}

export default addTask
