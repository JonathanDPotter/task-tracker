const addTask = (task) =>
  fetch("api/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

const fetchTasks = () => fetch("/api/tasks");

const fetchTask = (id) => fetch(`api/tasks/${id}`);

const toggleReminder = (id, updateTask) =>
  fetch(`api/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(updateTask),
  });

const deleteTask = (id) =>
  fetch(`api/tasks/${id}`, {
    method: "DELETE",
  });

export default { addTask, fetchTasks, fetchTask, toggleReminder, deleteTask };
