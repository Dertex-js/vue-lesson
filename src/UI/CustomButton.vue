<template>
  <button @click="emit('btnClick')" class="btn">
    <slot />
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'btnClick'): void
}>()
</script>

<style lang="scss" scoped>
.btn {
  font-size: 14px;
  font-weight: 500;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: #08a652;
  border: 1px solid #08a652;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
}
</style>