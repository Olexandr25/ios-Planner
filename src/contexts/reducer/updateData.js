const updateData = (state, payload) => {
  console.log("Payload", payload)

  payload?.category?.map(item => state?.category?.push(item))

  return { ...state }
}

export default updateData
