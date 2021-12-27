const updateRecord = (state, payload) => {
  const { collectionPath, id, values } = payload

  if (collectionPath === "category") {
    state[collectionPath].map(item => {
      if (item?.id === id) {
        item.name = values?.name
        item.updatedAt = values?.updatedAt
      }
      return item
    })
  }
  if (collectionPath === "task"){
    state[collectionPath].map(item => {
      if (item?.id === id){
        item.done = values?.done
        item.flagged = values?.flagged
        item.text = values?.text
        item.updatedAt = values?.updatedAt
        item.notes = values?.notes
      }
      return item
    })
  }

  return { ...state }
}

export default updateRecord
