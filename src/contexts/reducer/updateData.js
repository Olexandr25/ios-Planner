const updateData = (state, payload) => {

  payload?.category?.map(item => state?.category?.push(item))
  payload?.task?.map(item => state?.task?.push(item))

  return { ...state }
}

export default updateData
