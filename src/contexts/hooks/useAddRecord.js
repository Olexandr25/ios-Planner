import { firestoreService } from "services"

const { getId, createDocument, getTimestamp } = firestoreService

const useAddRecord = dispatch => {
  const addRecord = ({ collectionPath, id, values }) => {
    values = values || {}
    const recordId = id || getId(collectionPath)
    values.id = recordId

    if (collectionPath === "category") {
      values.name = values.name || "New List"
      values.createdAt = getTimestamp()
      values.updatedAt = getTimestamp()
      values.tasks = []
    }

    if (collectionPath === "task") {
      values.createdAt = getTimestamp()
      values.updatedAt = getTimestamp()
      values.done = values.done || false
      values.flagged = values.flagged || false
    }

    createDocument(collectionPath, recordId, values)

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
