<script setup lang="ts">
import { useToDoStore } from '@/stores/todo.store.ts'
import { storeToRefs } from 'pinia'

const store = useToDoStore()
const { todosList } = storeToRefs(store)
const { toggleCompleted, deleteTodo } = store
</script>

<template>
  <div v-for="todo in todosList" :key="todo.id">
    <div class="todo">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <i class="complete-todo" @click.stop="toggleCompleted(todo.id)"></i>
      <i class="delete-todo" @click.stop="deleteTodo(todo.id)"></i>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}

.complete-todo {
  &::after {
    display: inline-block;
    content: '\2713';
    width: 14px;
    height: 14px;
    margin-left: 4px;
    cursor: pointer;
  }
}

.delete-todo {
  &::after {
    display: inline-block;
    content: '\00d7';
    width: 14px;
    height: 14px;
    margin-left: 4px;
    font-style: normal;
    cursor: pointer;
  }
}
</style>
