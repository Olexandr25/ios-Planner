const addRecord = (state, payload) => {
  const { collectionPath, values } = payload

  state[collectionPath].push(values)

  return { ...state }
}

export default addRecord
