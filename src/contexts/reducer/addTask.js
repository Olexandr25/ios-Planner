const addTask = (state, payload) => {
  state.task.push(payload)

  return { ...state }
}

export default addTask
