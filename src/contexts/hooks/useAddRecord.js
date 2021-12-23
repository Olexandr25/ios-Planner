import { firestoreService } from "services"

const useAddRecord = dispatch => {
  const addRecord = (data, type) => {
    const payload = data
    const { createDocument } = firestoreService
    createDocument(type, data.id, data)
    dispatch({
      type: "addRecord",
      payload,
    })
  }

  return addRecord
}

export default useAddRecord
