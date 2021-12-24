<template>
  <div>
    <v-container>
      <h2>Employee List</h2>
      <v-container>
        <div v-for="item in empList" v-bind:key="item.id">
          <h3>{{ item.firstName }} {{ item.lastName }}</h3>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import BackendEventService from "../Service/BackendEventService";

export default {
  name: "EmployeeList",
  data() {
    return {
      msg: "Welcome to Your Secured Vue.js App with Keycloak",
      empList: [],
    };
  },
  created() {
    BackendEventService.getEmployess()
      .then((res) => {
        this.empList = res.data;
        console.log(res);
        console.log("empList", this.empList);
      })
      .catch((err) => {
        console.log("error getting employees");
      });
  },
};
</script>