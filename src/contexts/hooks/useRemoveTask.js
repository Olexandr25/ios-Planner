const useRemoveTask = dispatch => {
  const removeTask = id => {
    const payload = { id }
    dispatch({
      type: "removeTask",
      payload,
    })
  }

  return removeTask
}

export default useRemoveTask
