<template>
  <div class="hello">
    <ul>
      <li v-for="t in todos" :class="{ completed: t.completed }" @click="toggleTodo(t.id)" @dblclick="deleteTodo(t.id)">{{ t.task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  },
  methods: {
    toggleTodo(id) {
      this.$store.commit('toggleTodo', id)
    },
    deleteTodo(id) {
      this.$store.commit('deleteTodo', id)
    }
  }
}
</script>

<style scoped>
li.completed {
  text-decoration: line-through;
}
</style>
