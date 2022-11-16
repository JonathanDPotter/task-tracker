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
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "AddTask",
  setup() {
    const text = ref("");
    const day = ref("");
    const reminder = ref(false);

    const store = useStore();

    const onSubmit = (event) => {
      event.preventDefault();

      if (!text.value) {
        alert("Please add a task.");
        return;
      }

      const newTask = {
        text: text.value,
        day: day.value,
        reminder: reminder.value,
      };

      store.commit("addTask", newTask);

      text.value = "";
      day.value = "";
      reminder.value = false;
    };

    return { text, day, reminder, onSubmit };
  },
};
</script>
