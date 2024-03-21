import axios from 'axios'

let baseURL = 'http://localhost:8000'

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://rq-isp-2.onrender.com/'
}

export const api = axios.create({
  baseURL,
})
