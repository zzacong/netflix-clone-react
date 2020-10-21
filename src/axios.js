import axios from 'axios'

// BASE URL
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

export default instance
