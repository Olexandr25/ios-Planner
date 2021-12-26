const updateTask = (state, payload) => {
  const { id, text } = payload
  const isEmptyOrSpaces = str => {
    return str.length !== 0 && str.trim()
  }

  state.task.map(item => {
    if (item?.id === id) {
      item.text = text
    }
    return item
  })

  const removeTask = state?.task?.findIndex(item => item?.id === id)
  console.log(removeTask)

  console.log("8888888888888888")
  console.log(state?.task?.splice(removeTask, 1))

  return { ...state }
}

export default updateTask
