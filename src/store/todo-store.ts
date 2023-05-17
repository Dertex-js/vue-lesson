import { defineStore } from 'pinia'
import { todo } from '../services/api'
import { Todo } from '../types/Todo'

export const useTodoStore = defineStore("todo-store", {
  state: () => ({
    todos: [] as Todo[]
  }),
  actions: {
    fetchTodos() {
      todo.fetchTodos().then(({data}) => {
        this.todos = data
      })
    }
  }
})