<template class="h-100 w-100">
  <div
    class="d-flex h-75 p-5 flex-column align-items-center justify-content-around"
  >
    <h3>About Task Tracker</h3>
    <p class="indented">
      This is a modification of the Traversey Media
      <a href="https://youtu.be/qZXt1Aom3Cs">Vue Crash Course Task Tracker</a>
      app. I added Vuex state management and Bootstrap styling and a full back
      end with a database to the basic tutorial project The back end is hosted
      on heroku
      <a href="https://jonathan-potter-task-tracker.herokuapp.com/">here</a>.
    </p>
    <p class="indented">
      You can add tasks, double-click them to toggle reminders (the green
      highlight) and delete tasks. There is no login requirement, so everyone
      has the same list of tasks. I may add a login in the future.
    </p>
    <span class="fs-3">
      <router-link to="/">Go Home</router-link>
    </span>
  </div>
</template>
