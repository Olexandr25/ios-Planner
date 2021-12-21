import { firestoreService } from "services"

const useUpdateRecord = (store, dispatch) => {
  const updateRecord = (id, text) => {
    if (text !== undefined) {
      const { updateDocument, getTimestamp } = firestoreService
      const updatedAt = getTimestamp()
      updateDocument("category", id, { id, text, updatedAt })
      const payload = {
        id,
        text,
        updatedAt
      }

      dispatch({
        type: "updateRecord",
        payload,
      })
    }
  }

  return updateRecord
}

export default useUpdateRecord
