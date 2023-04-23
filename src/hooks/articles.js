import { getAllArticles } from 'api'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'

import {
  GET_ALL_ARTICLES,
  GET_ALL_FAIL,
} from '../redux/actionTypes'


export const useArticle = () => {
  const dispatch = useDispatch()

  const useGetAll = () =>
    useMutation(getAllArticles, {
      onSuccess: (response) => {
        dispatch({
          type: GET_ALL_ARTICLES,
          payload: response.data,
        })
      },
      onError: (error) => {
        dispatch({
          type: GET_ALL_FAIL,
          payload: error.response.data,
        })
      },
    })

  return { useGetAll }
}
