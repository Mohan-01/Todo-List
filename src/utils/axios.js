import axios from "axios";

// const baseURL = 'http://localhost:2401/api/v1/todos'
const baseURL = 'https://todo-api-0c21.onrender.com/api/v1/todos'

const Axios = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
    }
})

export default Axios;