<template>
  <MainHeader title="Task Tracker" />
  <div class="container">
    <AddTask v-show="this.$store.state.showAddTask" />
    <div
      v-if="this.$store.state.tasks === null"
      class="w-100 d-flex align-items-center"
    >
      <div class="spinner-border text-danger mx-5">
        <span class="sr-only">Loading...</span>
      </div>
      <span class="waiting">Waiting for database</span>
    </div>
    <AllTasks v-else :tasks="this.$store.state.tasks" />
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import AllTasks from "../components/AllTasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
  name: "Home",
  components: {
    MainHeader,
    AllTasks,
    AddTask,
  },

  async created() {
    this.$store.commit("fetchTasks");
  },
};
</script>
