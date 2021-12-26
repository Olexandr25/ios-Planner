const useUpdateRecord = dispatch => {
  const updateRecord = ({ collectionPath, id, values }) => {
    const payload = {
      collectionPath,
      id,
      values,
    }

    dispatch({
      type: "updateRecord",
      payload,
    })
  }

  return updateRecord
}

export default useUpdateRecord
