import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000',
})


export const getAllMovies = () => api.get(`/`)


const apis = {
  
    getAllMovies

}

export default apis