<template>
  <div class="item">
    <p>{{ text }}</p>
    <el-button @click="emit('delete', text)" type="danger">Удалить</el-button>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text: string
}

const { text } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'delete', text: string): void
}>()
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>