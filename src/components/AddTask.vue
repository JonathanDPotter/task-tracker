<template>
  <form
    @submit="onSubmit"
    class="form border border-2 border-secondary rounded p-2"
  >
    <div class="mb-3">
      <label class="form-label">Task</label>
      <input
        class="form-control"
        type="text"
        v-model="text"
        name="text"
        placeholder="Add Task"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Day & Time</label>
      <input
        class="form-control"
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Set Reminder</label>
      <input class="mx-3" type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-success w-100" />
  </form>
</template>

<script>
export default {
  name: "AddTask",

  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (!this.text) {
        alert("Please add a task.");
        return;
      }

      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.$store.commit("addTask", newTask);

      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>
