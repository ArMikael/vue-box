<script setup lang="ts">
import { ref } from 'vue';
import { useToDoStore } from '@/stores/todo.store.ts';

const todo = ref('');
const store = useToDoStore();

function addItemAndClear(item: string) {
  if (!item.length) {
    return
  }
  store.addTodo(item);
  todo.value = '';
}
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input v-model="todo" type="text" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped></style>
