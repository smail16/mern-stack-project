import axios from 'axios'
import humps from 'humps'

const token = localStorage.getItem('token') || ''

const apiCall = axios.create({
  baseURL: 'http://localhost:5005',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'x-access-token': `${token}`,
  },
})

apiCall.interceptors.response.use((response) => ({
  ...response,
  data: humps.camelizeKeys(response.data),
}))

export default apiCall
