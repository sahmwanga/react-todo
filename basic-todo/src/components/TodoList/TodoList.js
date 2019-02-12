import React, { Component } from 'react'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import deleteTask from '../../redux/actions/'

class TodoList extends Component {
  render() {
    console.log(this.props.deleteTask)
    return (
      <ul className="list-group">
        {this.props.tasks.map((item, index) => (
          <li className="list-group-item" key={index}>{item}
            <Button onClick={() => this.props.deleteTask(index)} btnType="danger">X</Button></li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(deleteTask, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);