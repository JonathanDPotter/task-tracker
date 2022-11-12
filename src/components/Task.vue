<template>
  <div
    @dblclick="this.$store.commit('toggleReminder', task._id)"
    :class="[
      task.reminder ? 'border-success' : '',
      'm-4 p-2 border-start border-4',
    ]"
    role="button"
  >
    <h3 class="d-flex align-items-center justify-content-between">
      {{ task.text }}
      <i
        @click="this.$store.commit('deleteTask', task._id)"
        class="fas fa-times text-danger"
      ></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>
