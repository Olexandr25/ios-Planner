import { firestoreService } from "services"

const { deleteDocument } = firestoreService

const useRemoveRecord = (store, dispatch) => {
  const removeRecord = async ({ collectionPath, id }) => {
    const payload = { collectionPath, id }

    deleteDocument(collectionPath, id)

    if (collectionPath === "category") {
      store?.task?.forEach(async task => {
        if (task.categoryId === id) {
          await deleteDocument("task", task.id)
          // const taskPayload = { collectionPath: "task", id: task.id }
          // dispatch({ type: "deleteRecord", payload: taskPayload })
        }
      })
    }

    dispatch({
      type: "removeRecord",
      payload,
    })
  }

  return removeRecord
}

export default useRemoveRecord
