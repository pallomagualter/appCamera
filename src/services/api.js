import axios from 'axios';

const api = axios.create({ 
   baseURL: 'http://10.17.1.71:3333'
})

export default api;