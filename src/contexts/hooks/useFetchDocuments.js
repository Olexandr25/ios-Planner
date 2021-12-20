import { firestoreService } from "services"

const useFetchDocuments = dispatch => {
  const fetchDocuments = async () => {
    const { queryDocuments } = firestoreService
    const payload = await queryDocuments("category")
    dispatch({
      type: "updateData",
      payload,
    })
  }

  return fetchDocuments
}

export default useFetchDocuments
