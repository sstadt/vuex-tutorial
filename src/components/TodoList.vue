<template>
  <div class="hello">
    <ul>
      <li v-for="t in todos" :class="{ completed: t.completed }">{{ t.task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todos'],
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  }
}
</script>

<style scoped>
li.completed {
  text-decoration: line-through;
}
</style>
