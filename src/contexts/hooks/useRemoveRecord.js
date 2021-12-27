import { firestoreService } from "services"

const { deleteDocument } = firestoreService

const useRemoveRecord = dispatch => {
  const removeRecord = ({ collectionPath, id }) => {
    const payload = { collectionPath, id }

    deleteDocument(collectionPath, id)

    dispatch({
      type: "removeRecord",
      payload,
    })
  }

  return removeRecord
}

export default useRemoveRecord
