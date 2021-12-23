const useAddTask = (dispatch) => {
    const addTask = (data, type) => {
        const payload = data
        console.table(payload)
        console.log(`type: ${type}`)
    }

    return addTask
}

export default useAddTask