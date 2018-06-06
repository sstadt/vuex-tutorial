
export default {
  state: {
    count: 3,
    todos: [{
      id: 1,
      task: 'Code',
      completed: true
    }, {
      id: 2,
      task: 'Sleep',
      completed: false
    }, {
      id: 3,
      task: 'Eat',
      completed: false
    }]
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    addTodo(state, taskName) {
      const task = {
        id: state.todos.length,
        task: taskName,
        completed: false
      }

      state.todos.unshift(task);
    },
    toggleTodo(state, taskId) {
      state.todos = state.todos.map(t => {
        if (t.id === taskId) {
          return {
            task: t.task,
            completed: !t.completed,
            id: t.id
          }
        }

        return t;
      })
    },
    deleteTodo(state, payload) {
      let index = state.todos.findIndex(t => t.id === payload)
      state.todos.splice(index, 1)
    }
  }
};
