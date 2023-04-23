import { register } from 'api'
import axios from 'axios'
import { useMutation } from 'react-query'

import {
  GET_ALL_ARTICLES,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from './actionTypes'

export const loginUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  })
  try {
    const { data } = await axios.post('/user/login', user)
    localStorage.setItem('token', data.token)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    })
  }
}
export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: LOG_OUT,
  })
}

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: token,
    },
  }
  dispatch({
    type: GET_PROFILE,
  })
  try {
    const { data } = await axios.get('/user/auth', config)
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    })
  }
}

// const loginUser = (user) => async (dispatch) => {
//   dispatch({
//     type: LOGIN,
//   })
//   try {
//     const { data } = await axios.post('/user/login', user)
//     localStorage.setItem('token', data.token)
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: error.response.data,
//     })
//   }
// }
