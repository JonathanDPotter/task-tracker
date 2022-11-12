import { createStore } from "vuex";
import api from "./api";

const store = createStore({
  state() {
    return {
      showAddTask: false,
      tasks: [],
    };
  },

  mutations: {
    // shows addTask form
    toggleAddTask(state) {
      state.showAddTask = !state.showAddTask;
    },

    // task CRUD actions
    async addTask(state, task) {
      const res = await api.addTask(task);
      const data = await res.json();
      state.tasks = [...state.tasks, data];
      this.commit("toggleAddTask");
    },

    async fetchTasks(state) {
      const res = await api.fetchTasks();
      const data = await res.json();
      state.tasks = data;
    },

    async toggleReminder(state, id) {
      const taskToToggle = await this.dispatch("fetchTask", id);
      const updateTask = {
        ...taskToToggle,
        reminder: !taskToToggle.reminder,
      };

      const res = await api.toggleReminder(id, updateTask);
      const data = await res.json();

      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },

    async deleteTask(state, id) {
      if (confirm("Are you sure?")) {
        const res = await api.deleteTask(id);

        res.status === 200
          ? (state.tasks = state.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task.");
        state.tasks = state.tasks.filter((task) => task.id !== id);
      }
    },
  },

  actions: {
    async fetchTask(_state, id) {
      const res = await api.fetchTask(id);
      const data = await res.json();
      return data;
    },
  },
});

export default store;
