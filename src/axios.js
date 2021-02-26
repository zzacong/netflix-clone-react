import axios from 'axios'

// BASE URL
export default axios.create({
  baseURL: 'api/movie',
})
