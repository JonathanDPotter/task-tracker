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
import { useStore } from "vuex";

export default {
  name: "MyButton",
  props: {
    color: String,
    text: String,
  },
  setup() {
    const store = useStore();
    const onClick = () => {
      store.commit("toggleAddTask");
    };
    return { onClick };
  },
};
</script>
