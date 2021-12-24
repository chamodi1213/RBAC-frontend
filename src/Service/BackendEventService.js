import axios from 'axios'

const baseUrl = 'http://localhost:8080';

export default {
    getEmployess() {
        return axios.get(baseUrl + '/api/employees', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        })
    },

    saveEmployee(empDetails) {
        return axios.post(baseUrl + '/api/employees', empDetails, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        })
    }
}
