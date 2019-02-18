import React, { Component } from 'react'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import deleteTask from '../../redux/actions/'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

class TodoList extends Component {
  render() {

    let li = (<li className="list-group-item text-center">loading...</li>)

    if (this.props.todos) {
      li = this.props.todos.map((item, index) => (

        <li className="list-group-item" key={item.id}>
          <div className='row'>
            <div className="col-md-9">
              {item.title}<br />
              <span style={{ color: 'gray' }}>Created by {item.authorId}</span>, 
              <span style={{paddingLeft:15,color: 'lightgray'}}>{moment(item.createdAt.toDate().toString()).fromNow()}</span>
            </div>
            <div className="col-md-3">
              <Button onClick={() => this.props.deleteTask(item.id)} btnType="danger">x</Button>
            </div>
          </div>
        </li>
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