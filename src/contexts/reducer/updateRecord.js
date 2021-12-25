const updateRecord = (state, payload) => {
  const stateCopy = state
  const { id, text, updatedAt } = payload
  function isEmptyOrSpaces(str) {
    return str.length !== 0 && str.trim()
  }
  if (isEmptyOrSpaces(text)) {
    stateCopy.filter(value => {
      if (value.id === id) {
        value.text = text
        value.updatedAt = updatedAt
      }
      return value
    })
  }

  return [...stateCopy]
}

export default updateRecord
