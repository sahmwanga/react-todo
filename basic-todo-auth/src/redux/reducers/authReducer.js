import c from '../constants'
const initialState = {
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.LOGIN_SUCCESS:
      return {
        ...state, authError: null
      }

    case c.LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login fail'
      }

    case c.LOGOUT_SUCCESS:
      return state

    case c.REGISTER_SUCCESS:
      console.log('Signup success')
      return {
        ...state,
        authError: null
      }

    case c.REGISTER_ERROR:
      console.log('Signup Error')
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state;
  }
}

export default authReducer