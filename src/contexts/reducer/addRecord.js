import { firestoreService } from "services"

const addRecord = (state, payload) => {
  const stateCopy = state
  const { createDocument } = firestoreService
  if (payload.categoryId) {
    const category = stateCopy.filter(item => item.id === payload.categoryId)
    category.map(item => {
      return item.tasks.push(payload)
    })
    createDocument("task", payload.id, payload)
  } else {
    stateCopy.push(payload)
    createDocument("category", payload.id, payload)
  }
  return [...stateCopy]
}

export default addRecord
