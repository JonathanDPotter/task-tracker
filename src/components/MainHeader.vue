<template>
  <header
    class="d-flex justify-content-between align-items-center p-3 mb-8 text-bg-secondary"
  >
    <h1>
      {{ title }}
    </h1>
    <MyButton :text="this.$store.state.showAddTask ? 'Close' : 'Add Task'" />
  </header>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  name: "MainHeader",
  props: {
    title: String,
  },
  components: {
    MyButton,
  },
};
</script>
