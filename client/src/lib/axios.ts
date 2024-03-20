import axios from 'axios'

let baseURL = 'http://localhost:8000'

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://rq-isp-server.vercel.app/'
}

export const api = axios.create({
  baseURL,
})
