import { RouteRecordRaw } from "vue-router"
import NewToDo from '../pages/NewToDo.vue'
import ToDo from '../pages/ToDo.vue'

const routes: readonly RouteRecordRaw[] = [
  {path: '/', component: ToDo},
  {path: '/new-todo', component: NewToDo}
]

export default routes