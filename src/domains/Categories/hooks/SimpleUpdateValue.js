const SimpleUpdateValue = (updateRecord, setEdit, id, editText, edit) => {
    const onSubmit = e => {
    e.preventDefault()
    updateRecord(id, editText)
    setEdit(!edit)
  }

  return { onSubmit}
}

export default SimpleUpdateValue