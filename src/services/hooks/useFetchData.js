import { useState, useEffect } from "react"
import { firestoreService } from "services"

const useFetchData = collectionPath => {
  const [collection, setCollection] = useState([])
  const { getCollection } = firestoreService
  useEffect(() => {
    const fetchData = async () => {
      const arr = await getCollection(collectionPath)
      setCollection(arr)
    }
    fetchData()
  },[])
  return collection
}

export default useFetchData
