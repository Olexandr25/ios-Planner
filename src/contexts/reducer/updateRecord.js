const updateRecord = (state, payload) => {
  const { collectionPath, id, values } = payload

  state[collectionPath].map(item => {
    if (item?.id === id) {
      item.name = values?.name
      item.updatedAt = values?.updatedAt
    }

    return item
  })

  return { ...state }
}

export default updateRecord
