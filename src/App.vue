<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div>
      <router-link
        :to="{
          name: 'branch1',
          params: { branch: 'branch1' },
        }"
      >
        Branch 1
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Tenant from "./Components/Tenant.vue";

export default {
  name: "app",
  components: {
    Tenant,
  },
  data() {
    return {
      msg: "Welcome to App Home",
    };
  },
  mounted() {
    this.$config;
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}
</style>
