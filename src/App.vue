<template>
  <div :class="prefersDarkMode ? 'main text-bg-dark' : 'main text-bg-light'">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },

  data() {
    return {
      prefersDarkMode: window.matchMedia("(prefers-color-scheme:dark)").matches,
    };
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

body {
  font-family: "Poppins", sans-serif;
}

.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  color: lightslategrey;

  &:hover {
    color: lightgrey;
  }
}

h3,
p {
  user-select: none;
}
</style>
