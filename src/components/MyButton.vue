<template>
  <button
    :class="
      this.$store.state.showAddTask ? 'btn btn-danger' : 'btn btn-success'
    "
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    color: String,
    text: String,
  },
  methods: {
    onClick() {
      this.$store.commit("toggleAddTask");
    },
  },
};
</script>
