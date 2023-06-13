import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://pushy-club-production.up.railway.app/',
})
