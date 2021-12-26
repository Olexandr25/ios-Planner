const removeRecord = (state, payload) => {
  const { collectionPath, id } = payload

  // if (collectionPath === "category") {
  const removeIndex = state[collectionPath]?.findIndex(item => item.id === id)
  state[collectionPath]?.splice(removeIndex, 1)
  // } else {
  //   const removeIndex = state[collectionPath]?.findIndex(item => item.id === id)
  //   state[collectionPath]?.splice(removeIndex, 1)
  // }

  return { ...state }
}

export default removeRecord
