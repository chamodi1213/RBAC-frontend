<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <v-container>
      <h2>
        {{ keycloak.idTokenParsed.given_name }}
        {{ keycloak.idTokenParsed.family_name }}
      </h2>
      <p>Username: {{ keycloak.idTokenParsed.preferred_username }}</p>
    </v-container>
    <div>
      <div>
        <v-btn small @click="logOut()">Logout</v-btn>
      </div>
    </div>
    <div>
      <EmployeeList />
    </div>
    <div v-if="!viewOnly">
      <h3>This is not view only</h3>
      <AddEmployee />
    </div>
    <div v-else>
      <h3>This is view only</h3>
    </div>
  </div>
</template>

<script>
import EmployeeList from "./EmployeeList.vue";
import AddEmployee from "./AddEmployee.vue";

export default {
  name: "app",
  components: {
    EmployeeList,
    AddEmployee,
  },
  props: ["keycloak"],
  data() {
    return {
      msg: "Welcome to App Home",
      admin: false,
      viewOnly: false,
      roles: this.keycloak.realmAccess.roles,
    };
  },
  created() {
    console.log("keycloak", this.roles);
    let allowed = this.roles.some((r) => ["admin", "manager"].indexOf(r) >= 0);
    console.log("allowed", allowed);
    if (allowed) {
      console.log("admin");
    } else {
      console.log("user");
      this.viewOnly = true;
    }
  },
  methods: {
    logOut() {
      this.keycloak.logout();
      localStorage.removeItem("jwt");
      localStorage.removeItem("jwt-refresh-token");
    },
  },
};
</script>

<style>
#home {
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
  color: #333;
  font-size: 20px;
}

a {
  color: #42b983;
}

#wrapper {
  display: flex;
  margin-top: 100px;
}

.jwt-token {
  width: 50%;
  display: block;
  padding: 20px;
  margin: 10 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #d63aff;
  font-weight: bolder;
}

.btn {
  color: #fff;
  background-color: #0088ce;
  border-color: #00659c;
  padding: 6px 10px;
  font-size: 14px;
  line-height: 1.3333333;
  border-radius: 1px;
}
</style>
