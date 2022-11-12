const baseURL = "https://jonathan-potter-task-tracker.herokuapp.com";

const addTask = (task) =>
  fetch(`${baseURL}/api/task`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

const fetchTasks = () => fetch(`${baseURL}/api/task`);

const fetchTask = (id) => fetch(`${baseURL}/api/task/${id}`);

const toggleReminder = (id, updateTask) =>
  fetch(`${baseURL}/api/task/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updateTask),
  });

const deleteTask = (id) =>
  fetch(`${baseURL}/api/task/${id}`, {
    method: "DELETE",
  });

export default { addTask, fetchTasks, fetchTask, toggleReminder, deleteTask };
