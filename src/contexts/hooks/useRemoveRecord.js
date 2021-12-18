const useRemoveRecord = dispatch => {
  const removeRecord = id => {
    const payload = id
    dispatch({
      type: "removeRecord",
      payload,
    })
  }

  return removeRecord
}

export default useRemoveRecord
