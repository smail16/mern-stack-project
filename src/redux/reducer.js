const {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN,
  LOGIN_FAIL,
  LOG_OUT,
  LOGIN_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
} = require('./actionTypes')

const init = {
  loading: false,
  errors: null,
  users: null,
  token: null,
  isAuth: false,
}
// eslint-disable-next-line default-param-last
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        errors: null,
        
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        token: payload.token,
        users: payload.user,
        isAuth: true,
      }

    case LOG_OUT:
      return {
        ...state,
        loading: false,
        errors: null,
        token: null,
        users: null,
        isAuth: false,
      }

    case GET_PROFILE_SUCCESS:
      return {
        loading: false,
        users: payload,
        isAuth: true,
      }

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      }

    default:
      return state
  }
}

export default reducer
