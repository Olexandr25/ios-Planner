const useAddRecord = dispatch => {
  const addRecord = data => {
    const payload = data
    dispatch({
      type: "addRecord",
      payload,
    })
  }

  return addRecord
}

export default useAddRecord
