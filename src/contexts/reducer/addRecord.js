const addRecord = (state, payload) => {
  const stateCopy = state
  stateCopy.push(payload)
  console.log(stateCopy)
  return [...stateCopy]
}

export default addRecord
