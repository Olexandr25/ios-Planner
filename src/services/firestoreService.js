import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  getDoc,
  getDocs,
  orderBy,
  limit,
  where,
  deleteDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRgVXxMiWp7Y-WEPe8LYx2es1cYf24eBc",
  authDomain: "ios-planner.firebaseapp.com",
  projectId: "ios-planner",
  storageBucket: "ios-planner.appspot.com",
  messagingSenderId: "366030847286",
  appId: "1:366030847286:web:d1a2516bf0e7141277c797",
}

initializeApp(firebaseConfig)

const db = getFirestore()

const createDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await setDoc(ref, documentData)
  return result
}

const generateId = path => doc(collection(db, path)).id

const updateDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await updateDoc(ref, documentData)
  return result
}

const getDocument = async (collectionPath, id) => {
  const ref = doc(db, collectionPath, id)
  const docSnapshot = await getDoc(ref)
  return docSnapshot.data()
}

const queryDocuments = async (
  collectionPath,
  queries,
  orderByRule,
  limitRule
) => {
  const ref = collection(db, collectionPath)
  const queriesExtended = queries && queries.map((q) => where(...q))
  orderByRule && queriesExtended.push(orderBy(...orderByRule))
  limitRule && queriesExtended.push(limit(limitRule))
  const q = queriesExtended ? query(ref, ...queriesExtended) : query(ref)
  const querySnapshot = await getDocs(q)
  let result = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })
  return result
}

const getTimestamp = () => serverTimestamp()

const getId = collectionPath => {
  const ref = doc(collection(db, collectionPath))
  return ref.id
}

const deleteDocument = async (collectionPath, id) => {
  const result = await deleteDoc(doc(db, collectionPath, id))
  return result
}

// Test function, for understanding, How to work with query
// And example with one collection, "category"
const getCollection = async (collectionPath) => {
  const categoryRef = collection(db, collectionPath)
  const q = query(categoryRef)
  const querySnapshot = await getDocs(q)
  let result = []
  querySnapshot.forEach(doc => {
    result.push(doc.data())
    // console.log( doc.data())
  })
  return result
}

const firestoreService = {
  createDocument,
  generateId,
  updateDocument,
  getDocument,
  queryDocuments,
  deleteDocument,
  getTimestamp,
  getId, getCollection
}

export default firestoreService
