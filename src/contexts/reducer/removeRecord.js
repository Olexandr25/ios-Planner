const removeRecord = (state, payload) => {
  const { collectionPath, id } = payload

  const removeIndex = state[collectionPath]?.findIndex(item => item.id === id)
  state[collectionPath]?.splice(removeIndex, 1)

  if (collectionPath === "category") {
    console.log(collectionPath)
    state?.task?.map(item => {
      let x = 0
      if (item.categoryId === id) {
        state?.task?.splice(x, 1)
      }
      x++
      return item
    })
  }

  return { ...state }
}

export default removeRecord
