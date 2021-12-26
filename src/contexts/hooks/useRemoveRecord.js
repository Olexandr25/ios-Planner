const useRemoveRecord = dispatch => {
  const removeRecord = ({ path, id }) => {
    const payload = { path, id }
    dispatch({
      type: "removeRecord",
      payload,
    })
  }

  return removeRecord
}

export default useRemoveRecord
