import { createStore } from "vuex";
import api from "./api";

const store = createStore({
  state() {
    return {
      showAddTask: false,
      tasks: null,
    };
  },

  mutations: {
    // shows addTask form
    toggleAddTask(state) {
      state.showAddTask = !state.showAddTask;
    },

    // task CRUD actions
    async addTask(_state, task) {
      try {
        await api.addTask(task);
        this.commit("fetchTasks");
        this.commit("toggleAddTask");
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },

    async fetchTasks(state) {
      try {
        const res = await api.fetchTasks();
        const data = await res.json();
        state.tasks = data;
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },

    async toggleReminder(state, id) {
      try {
        const taskToToggle = await this.dispatch("fetchTask", id);
        const updateTask = {
          ...taskToToggle,
          reminder: !taskToToggle.reminder,
        };
        await api.toggleReminder(id, updateTask);
        this.commit("fetchTasks");
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },

    async deleteTask(state, id) {
      if (confirm("Are you sure?")) {
        try {
          await api.deleteTask(id);
          this.commit("fetchTasks");
        } catch (error) {
          alert(error.message);
          console.log(error);
        }
      }
    },
  },

  actions: {
    // fetches a single task
    async fetchTask(_state, id) {
      const res = await api.fetchTask(id);
      const data = await res.json();
      return data;
    },
  },
});

export default store;
