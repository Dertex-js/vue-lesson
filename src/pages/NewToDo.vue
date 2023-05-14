<template>
  <div class="wrapper">
    <div class="head container">
      <h3>NewToDo App</h3>
      <div class="inputGroup">
        <el-input placeholder="Введите текст" v-model="text" />
        <el-button @click="handleSave">Сохранить</el-button>
      </div>
    </div>
    <div class="main container">
      <TodoItem v-for="(todo, index) in todos" :key="index" :text="todo" @delete="handleDelete"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TodoItem from '../components/ToDo/TodoItem.vue'

const text = ref('')
const todos = ref<string[]>([])

const handleSave = () => {
  todos.value.push(text.value)
  text.value = ''
}

const handleDelete = (text: string): void => {
  todos.value.splice(todos.value.findIndex((el) => el === text), 1)
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
  }
}
</style>