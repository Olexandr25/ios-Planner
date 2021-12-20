import { firestoreService } from "services"

const useAddRecord = dispatch => {
  const addRecord = data => {
    const payload = data
    const { createDocument } = firestoreService
    createDocument('category', data.id, data)
    dispatch({
      type: "addRecord",
      payload,
    })
  }

  return addRecord
}

export default useAddRecord
