import { combineReducers } from 'redux'
import todoReducer from './todo'
import authReducer from './authReducer'
import { firestoreReducer } from 'redux-firestore'

const reducers = combineReducers({
  tasks: todoReducer,
  auth: authReducer,
  firestore: firestoreReducer
})

export default reducers