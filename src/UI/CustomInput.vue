<template>
  <input
    type="text"
    class="customInp"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  >
</template>

<script lang="ts" setup>
interface Props {
  placeholder: string
  modelValue: string
}

const { placeholder, modelValue } = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style lang="scss" scoped>
.customInp {
  height: 43px;
  padding: 10px 15px;
  border: 1px solid #cccccc;
  outline: none;
  color: #212529;
  background-color: #fafbfc;
  appearance: none;
  border-radius: 4px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;

  &:hover {
    border: 1px solid #08a652;
  }

  &:focus {
    border: 1px solid #08a652;
    box-shadow: 0 0 0 5px rgba(8, 166, 82, 0.25);
  }
}
</style>