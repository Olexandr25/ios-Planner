const addRecord = (state, payload) => {
  const { collectionPath, values } = payload

  if (collectionPath === "category") {
    state?.category?.push(values)
  }
  if (collectionPath === "task") {
    state?.task?.push(values)
  }

  return { ...state }
}

export default addRecord
