const useAddTask = dispatch => {
  const addTask = data => {
    const payload = data
    dispatch({
      type: "addTask",
      payload,
    })
  }
  return addTask
}

export default useAddTask
