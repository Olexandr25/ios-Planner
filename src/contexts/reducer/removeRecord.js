const removeRecord = (state, payload) => {
  const { path, id } = payload

  console.table("***********", payload)

  if (path === "category") {
    const removeIndex = state?.category?.findIndex(item => item.id === id)
    state?.category?.splice(removeIndex, 1)
  } else {
    const removeIndex = state?.task?.findIndex(item => item.id === id)
    state?.task?.splice(removeIndex, 1)
  }

  return { ...state }
}

export default removeRecord