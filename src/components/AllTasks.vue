<template>
  <div v-for="task in this.$store.state.tasks" :key="task.id">
    <Task :task="task" />
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "AllTasks",
  props: {
    tasks: Array,
  },

  components: {
    Task,
  },
};
</script>
