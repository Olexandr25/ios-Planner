const useAddCategory = dispatch => {
  const addCategory = data => {
    const payload = data
    dispatch({
      type: "addCategory",
      payload,
    })
  }

  return addCategory
}

export default useAddCategory
