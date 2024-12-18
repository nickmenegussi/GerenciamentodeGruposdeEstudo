import axios from 'axios'

// endereço que o servidor do BackEnd está
const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export default api