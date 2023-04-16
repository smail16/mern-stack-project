import { register } from 'api'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'

import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../redux/actionTypes'

export const useAuth = () => {
  const dispatch = useDispatch()

  const useRegisterUser = () =>
    useMutation(register, {
      onSuccess: (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        })
      },
      onError: (error) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: error.response.data,
        })
      },
    })

  return { useRegisterUser }
}
