<template>
  <div :class="prefersDarkMode ? 'main text-bg-dark' : 'main text-bg-light'">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import "./App.scss";

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
