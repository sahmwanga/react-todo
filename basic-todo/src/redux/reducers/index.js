import c from '../constants'
import { combineReducers } from 'redux'

const initialState = [
  'test', 'abc'
]

const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case c.ADD_TODO:
      return state.concat(action.payload);

    case c.REMOVE_TODO:
      console.log('remove todo...')
      state = state.slice();
      state.splice(action.payload, 1)
      return state;

    default:
      return state;
  }

},

  reducers = combineReducers({
    tasks: todoReducer
  })

export default reducers