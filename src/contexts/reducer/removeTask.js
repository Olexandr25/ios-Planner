const removeTask = (state, payload) => {
  const { id } = payload

  const removeIndex = state?.task?.findIndex(item => item.id === id)
  state?.task?.splice(removeIndex, 1)

  return { ...state }
}

export default removeTask
