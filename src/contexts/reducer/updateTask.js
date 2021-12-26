const updateTask = (state, payload) => {
  const { id, text, notes } = payload

  const hasNonWhitespace = Boolean(text.trim())
  const result = hasNonWhitespace && text.length !== 0
  const removeIndex = state.task.findIndex(item => item.id === id)

  if (result) {
    state.task.map(item => {
      if (item?.id === id) {
        item.text = text
        item.notes = notes
      }
      return item
    })
  } else {
    state.task.splice(removeIndex, 1)
  }

  return { ...state }
}

export default updateTask
