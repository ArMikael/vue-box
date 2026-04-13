import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import TodoForm from '../TodoForm.vue'
import { useToDoStore } from '../../stores/todo.store'

describe('TodoForm Component', () => {
  let pinia: ReturnType<typeof createPinia>

  const mountTodoForm = () =>
    mount(TodoForm, {
      global: {
        plugins: [pinia],
      },
    })

  beforeEach(() => {
    pinia = createPinia()
    setActivePinia(pinia)
  })

  it('adds a todo when the form is submitted', async () => {
    const wrapper = mountTodoForm()
    const store = useToDoStore()

    await wrapper.find('input').setValue('Buy milk')
    await wrapper.find('form').trigger('submit.prevent')

    expect(store.todosList).toHaveLength(1)
    expect(store.todosList[0]?.item).toBe('Buy milk')
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('')
  })

  it('does not add an empty todo', async () => {
    const wrapper = mountTodoForm()
    const store = useToDoStore()

    await wrapper.find('form').trigger('submit.prevent')

    expect(store.todosList).toHaveLength(0)
  })
})
