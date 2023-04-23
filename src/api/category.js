import { apiCall } from 'config'

export const getAllCategories = async (body) => apiCall.get('/category/', body)
