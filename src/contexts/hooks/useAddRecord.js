import { firestoreService } from "services"

const { getId, createDocument } = firestoreService

const useAddRecord = dispatch => {
  const addRecord = ({ collectionPath, id, values }) => {
    values = values || {}
    const recordId = id || getId(collectionPath)
    values.id = recordId

    if (collectionPath === "category") {
      values.name = values.name || "New List"
      values.createdAt = Date.now()
      values.updatedAt = Date.now()
      values.tasks = []
    }

    if (collectionPath === "task") {
      values.createdAt = Date.now()
      values.updatedAt = Date.now()
      values.done = values.done || false
      values.flagged = values.flagged || false
    }

    const payload = {
      collectionPath,
      id: recordId,
      values,
    }

    dispatch({ type: "addRecord", payload })
  }

  return addRecord
}

export default useAddRecord
