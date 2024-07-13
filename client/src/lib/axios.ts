import axios from 'axios'

const baseURL =
  import.meta.env.NODE_ENV === 'production'
    ? import.meta.env.VITE_BASE_URL
    : 'http://localhost:8000'

export const api = axios.create({
  baseURL,
})
