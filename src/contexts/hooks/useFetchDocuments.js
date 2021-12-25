import { firestoreService } from "services"

const useFetchDocuments = dispatch => {
  const fetchDocuments = async (collectionPath) => {
    const { queryDocuments } = firestoreService
    const payload = await queryDocuments(collectionPath)
    dispatch({
      type: "updateData",
      payload,
    })
  }

  return fetchDocuments
}

export default useFetchDocuments
