const removeRecord = (state, payload) => {
  const stateCopy = state

  const removeIndex = stateCopy.findIndex(item => item.id === payload)
  stateCopy.splice(removeIndex, 1)

  return [...stateCopy]
}

export default removeRecord
