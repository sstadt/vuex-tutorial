
export default {
  state: {
    count: 3,
    todos: [{
      task: 'Code',
      completed: true
    }, {
      task: 'Sleep',
      completed: false
    }, {
      task: 'Eat',
      completed: false
    }]
  },
  getters: {
    todos: state => state.todos
  }
};
