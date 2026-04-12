import { defineStore } from 'pinia';

export type Todo = {
  id: number,
  item: string,
  completed: boolean
}


export const useToDoStore = defineStore('TodoStore', {
  state: (): { todosList: Todo[]; id: number } => ({
    todosList: [],
    id: 0,
  }),

  actions: {
    addTodo(item: string) {
      this.todosList.push({
        id: this.id++,
        item,
        completed: false,
      })
    },
    deleteTodo(id: number) {
       this.todosList = this.todosList.filter((todo) => todo.id !== id)
    },
    toggleCompleted(id: number) {
      const todo = this.todosList.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },

  getters: {},
})
