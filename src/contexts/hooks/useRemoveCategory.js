const useRemoveCategory = dispatch => {
  const removeCategory = id => {
    const payload = { id }
    dispatch({
      type: "removeCategory",
      payload,
    })
  }

  return removeCategory
}

export default useRemoveCategory
