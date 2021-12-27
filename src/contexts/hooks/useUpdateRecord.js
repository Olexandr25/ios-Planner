import { firestoreService } from "services"

const { updateDocument } = firestoreService

const useUpdateRecord = dispatch => {
  const updateRecord = ({ collectionPath, id, values }) => {
    const payload = {
      collectionPath,
      id,
      values,
    }

    updateDocument(collectionPath, id, values)

    dispatch({
      type: "updateRecord",
      payload,
    })
  }

  return updateRecord
}

export default useUpdateRecord
