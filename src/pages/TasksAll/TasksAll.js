import { PageLayout } from "components"
import { useStore } from "contexts"

const TasksAll = () => {
  const { store } = useStore()
  let CountTasks = 0
  store?.task?.map(item => CountTasks++)

  return <PageLayout title={"All"} count={CountTasks} titleColor="black" />
}

export default TasksAll
