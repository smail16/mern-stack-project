import { getAllArticles } from 'api'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { addArticles } from 'redux/Slice/Slice'

import { GET_ALL_ARTICLES, GET_ALL_FAIL } from '../redux/actionTypes'

export const useArticles = () => {
  const dispatch = useDispatch()

  const useGetAllArticles = () =>
    useQuery(['getArticles'], getAllArticles, {
      onSuccess: (response) => {
        
        dispatch(addArticles(response.data))
      },
      onError: (error) => {
        console.log('error')
      },
    })

  return { useGetAllArticles }
}
