import { RouteRecordRaw } from "vue-router"
import ToDo from '../pages/ToDo.vue'
import TodoDetail from '../pages/TodoDetail.vue'

const routes: readonly RouteRecordRaw[] = [
  {path: '/', component: ToDo},
  {path: '/todo-detail/:id', component: TodoDetail}
]

export default routes