const useAddRecord = dispatch => {
  const addRecord = ({id, text}) => {
    console.log(`id: ${id}`)
    console.log(`text: ${text}`)
    console.log("useAddRecord > addRecord")
  }

  return addRecord
}

export default useAddRecord
