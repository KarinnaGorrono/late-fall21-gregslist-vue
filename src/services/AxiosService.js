import Axios from 'axios'
import { baseURL } from '../env.js'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
