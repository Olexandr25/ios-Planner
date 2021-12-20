import { firestoreService } from "services"

const useUpdateRecord = (store, dispatch) => {
  const updateRecord = (id, text) => {
    if (text !== undefined) {
      const { updateDocument } = firestoreService
      updateDocument("category", id, { text })
      const payload = {
        id,
        text,
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
