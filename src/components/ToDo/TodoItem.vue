<template>
  <div class="item">
    <p @click="emit('push')" style="cursor: pointer">{{ todo.title }}</p>
    <el-button @click="emit('delete', todo)" type="danger">Удалить</el-button>
  </div>
</template>

<script lang="ts" setup>
import { Todo } from '../../types/Todo'

interface Props {
  todo: Todo
}

const { todo } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'delete', todo: Todo): void
  (e: 'push'): void
}>()
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>