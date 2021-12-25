const useUpdateCategory = (store, dispatch) => {
  const updateCategory = (id, name, updatedAt) => {
    const payload = {
      id,
      name,
      updatedAt,
    }

    dispatch({
      type: "updateCategory",
      payload,
    })
  }

  return updateCategory
}

export default useUpdateCategory
