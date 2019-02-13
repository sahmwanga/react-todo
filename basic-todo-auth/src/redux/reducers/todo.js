import c from '../constants'

const initialState = []

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.ADD_TODO:
      state = state.concat(action.payload);
      return state;
    case c.ADD_TODO_ERROR:
      console.log('add todo error: ')
      return state;

    case c.REMOVE_TODO:
      console.log('remove todo...')
      state = state.slice();
      state.splice(action.payload, 1)
      return state;
    default:
      return state;
  }

}

export default todoReducer