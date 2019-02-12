import React, { Component } from 'react'
import TodoList from '../TodoList/TodoList'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addTask from '../../redux/actions'

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({ todo: event.target.value })
  }


  render() {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Todo App</h2><hr />
            <div className="row">
              <div className="col-sm-9">
                <div className="form-group">
                  <input type="text" onChange={this.onInputChange} ref="task" className="form-control" placeholder="Todo..." />
                </div>
              </div>
              <div className="col-sm-3">
                <Button
                  btnType="info"
                  onClick={() => this.props.addTask(this.state.todo)}>Add Todo</Button>
              </div>
            </div>
            <div>
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(addTask, dispatch)
}

export default connect(() => { }, mapDispatchToProps)(Todo)