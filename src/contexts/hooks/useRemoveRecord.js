import { firestoreService } from "services"

const useRemoveRecord = dispatch => {
  const removeRecord = id => {
    const payload = id
    const { deleteDocument } = firestoreService
    deleteDocument('category', id)
    dispatch({
      type: "removeRecord",
      payload,
    })
  }

  return removeRecord
}

export default useRemoveRecord
