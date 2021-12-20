const updateRecord = (state, payload) => {
  const stateCopy = state
  const { id, text } = payload
  stateCopy.filter(value => {
    if (value.id === id) {
      value.text = text
    }
    return value
  })

  return [...stateCopy]
}

export default updateRecord
