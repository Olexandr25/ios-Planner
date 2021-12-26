const useUpdateTask = (store, dispatch) => {
  const updateTask = data => {
    const payload = data

    dispatch({
      type: "updateTask",
      payload,
    })
  }

  return updateTask
}

export default useUpdateTask
