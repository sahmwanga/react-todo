import { combineReducers } from 'redux'
import todoReducer from './todo'
import authReducer from './authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const reducers = combineReducers({
  tasks: todoReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default reducers