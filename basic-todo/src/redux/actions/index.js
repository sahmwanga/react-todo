// import axios from 'axios'
import c from '../constants'

const addTask = (task) => {
  return {
    type: c.ADD_TODO,
    payload: task
  }
},
  deleteTask = (id) => {
    return {
      type: c.REMOVE_TODO,
      payload: id
    }
  }

export default { addTask, deleteTask }