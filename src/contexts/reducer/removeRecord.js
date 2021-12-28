const removeRecord = (state, payload) => {
  const { id } = payload

  const resultCategories = state?.category?.filter(
    category => category.id !== id
  )

  const resultTasks = state?.task?.filter(task => {
    return task.id !== id && task?.categoryId !== id
  })

  return { ...state, category: resultCategories, task: resultTasks }
}

export default removeRecord
