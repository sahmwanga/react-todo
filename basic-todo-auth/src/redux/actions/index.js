// import axios from 'axios'
import c from '../constants'

const addTask = (task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to external api
    // console.log(getState())
    const authorId = getState().firebase.auth.uid;

    const firestore = getFirestore()
    firestore.collection('todos').add({
      title: task,
      createdAt: new Date(),
      authorId: authorId
    }).then(() => {
      dispatch({ type: c.ADD_TODO, payload: task })
    }).catch(err => {
      dispatch({ type: c.ADD_TODO_ERROR, err })
    })
  }
},
  deleteTask = (id) => {
    return {
      type: c.REMOVE_TODO,
      payload: id
    }
  }

export default { addTask, deleteTask }