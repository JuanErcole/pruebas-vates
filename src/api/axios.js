import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'


const usersApi = axios.create({
    baseURL,   
})

export default usersApi;





