<template>
  <div>
    <v-btn small @click="showForm()">Add Employeee</v-btn>
    <v-container v-if="ifShowForm" style="max-width: 50%">
      <p>Enter details</p>
      <form @submit="onSubmit" class="add-form">
        <div class="form-control">
          <label>First Name</label>
          <input
            type="text"
            v-model="firstName"
            name="firstName"
            placeholder="enter first name"
          />
        </div>
        <div class="form-control">
          <label>Last Name</label>
          <input
            type="text"
            v-model="lastName"
            name="lastName"
            placeholder="enter last name"
          />
        </div>
        <div class="form-control">
          <label>Email</label>
          <input
            type="text"
            v-model="email"
            name="email"
            placeholder="enter email"
          />
        </div>
        <v-btn type="submit">Save</v-btn>
        <v-btn @click="cancle()"> cancle </v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
import BackendEventService from "../Service/BackendEventService";

export default {
  name: "AddEmployee",
  data() {
    return {
      ifShowForm: false,
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  methods: {
    showForm() {
      this.ifShowForm = true;
      console.log("ifShowForm", this.ifShowForm);
    },
    onSubmit(e) {
      const empDetails = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };
      BackendEventService.saveEmployee(empDetails)
        .then((res) => {
          console.log("response", res);
        })
        .catch((err) => {
          console.log("error saving employee");
        });
    },
    cancle() {
      this.ifShowForm = false;
      console.log("ifShowForm", this.ifShowForm);
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>