<template>
  <div class="hello">
    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './TodoList'

export default {
  name: 'HelloWorld',
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  },
  components: {
    'todo-list': TodoList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
