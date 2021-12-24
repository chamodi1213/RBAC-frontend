<template>
    <div>
        <h2>Emp List</h2>
        <p>get employees list</p>
    <table>
        <tr>
            <td>firstName new</td>
        </tr>
        <tr v-for="item in empList" v-bind:key="item.id">
            <td>{{item.firstName}}</td>
        </tr>
    </table>
    </div>
</template>

<script>
import BackendEventService from '../Service/BackendEventService'

export default {
    name: 'EmployeeList',
    data () {
        return {
            msg: 'Welcome to Your Secured Vue.js App with Keycloak',
            empList: []
        }
    },
    created() {
        BackendEventService.getEmployess()
        .then(res => {
            this.empList = res.data
            console.log(res)
            console.log("empList", this.empList)

        })
        .catch(err => {
            console.log('error getting employees')
        })
    }

}
</script>