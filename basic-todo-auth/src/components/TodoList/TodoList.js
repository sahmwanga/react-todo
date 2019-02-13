import React, { Component } from 'react'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import deleteTask from '../../redux/actions/'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class TodoList extends Component {
  render() {

    let li = (<li className="list-group-item text-center">loading...</li>)

    if (this.props.todos) {
      li = this.props.todos.map((item, index) => (
        <div>
          <li className="list-group-item" key={item.id}>{`${item.title} - Author: ${item.authorId}`} </li>
          <Button onClick={() => this.props.deleteTask(item.id)} btnType="danger">X</Button>
        </div>

      ))
    }

    return (
      <ul className="list-group list-group-flush">
        {li}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.firestore.ordered.todos)
  return {
    todos: state.firestore.ordered.todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(deleteTask, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default compose(
  firestoreConnect(['todos']),
  connect(mapStateToProps, mapDispatchToProps)
)(TodoList)