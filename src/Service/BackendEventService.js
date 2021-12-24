import axios from 'axios'

// const apiClient = axios.create({
//     baseURL: 'http://localhost:8080',
//     headers: {
//         Authorization: 'Bearer ' + localStorage.getItem('jwt')
//     }
// })


export default {
    getEmployess() {
        return axios.get('http://localhost:8080/api/employees', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }   
        })
    }
}
