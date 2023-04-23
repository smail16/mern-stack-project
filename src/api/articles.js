import { apiCall } from 'config'

// export const register = async (body) => apiCall.post('/article/register', body)
export const getAllArticles = async (body) => apiCall.get ('/article', body )