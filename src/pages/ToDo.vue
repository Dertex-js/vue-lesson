<template>
  <div class="wrapper">
    <div class="head container">
      <h3>ToDo App</h3>
      <div class="inputGroup">
        <el-input placeholder="Введите текст" v-model="text" />
        <el-button @click="handleSave">Сохранить</el-button>
      </div>
    </div>
    <el-scrollbar v-if="todoStore.todos.length"  class="container">
      <div class="main">
        <TodoItem
          v-for="(todo, index) in todoStore.todos"
          :key="index"
          :todo="todo"
          @delete="handleDelete"
          @push="router.push(`/todo-detail/${todo.id}`)"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TodoItem from '../components/ToDo/TodoItem.vue'
import router from '../router'
import { useTodoStore } from '../store/todo-store'
import { Todo } from '../types/Todo'

const text = ref('')

const todoStore = useTodoStore()
todoStore.fetchTodos()

const handleSave = () => {
  if (text.value !== '') {
    todoStore.todos.push({
      userId: 1,
      id: Math.random(),
      completed: false,
      title: text.value
    })
    text.value = ''
  }
}

const handleDelete = (todo: Todo): void => {
  todoStore.todos.splice(todoStore.todos.findIndex((el) => el === todo), 1)
}


</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: aliceblue;
}
.container {
  width: 30vw;
  background: white;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.head {
  margin-top: 40px;

  .inputGroup {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
}

.main {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>