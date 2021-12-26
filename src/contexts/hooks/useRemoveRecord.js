const useRemoveRecord = dispatch => {
  const removeRecord = ({ collectionPath, id }) => {
    const payload = { collectionPath, id }
    dispatch({
      type: "removeRecord",
      payload,
    })
  }

  return removeRecord
}

export default useRemoveRecord
