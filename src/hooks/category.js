import { useMutation } from '@tanstack/react-query'
import { getAllCategories } from 'api'
import { useDispatch } from 'react-redux'

import { GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_FAIL } from '../redux/actionTypes'

export const useCategory = () => {
  const dispatch = useDispatch()

  const useGetAll = () =>
    useMutation(getAllCategories, {
      onSuccess: (response) => {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: response.data,
        })
      },
      onError: (error) => {
        dispatch({
          type: GET_ALL_CATEGORIES_FAIL,
          payload: error.response.data,
        })
      },
    })

  return { useGetAll }
}
