const useUpdateRecord = (store, dispatch) => {
  const updateRecord = data => {
    console.log(`useUpdateRecord: ${data}`)
    const payload = data
    dispatch({
      type: "updateRecord",
      payload,
    })
  }

  return updateRecord
}

export default useUpdateRecord
