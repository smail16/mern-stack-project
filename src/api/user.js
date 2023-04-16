/* eslint-disable no-return-await */
import { apiCall } from 'config'

export const register = async (body) => await apiCall.post('/user/register', body)
