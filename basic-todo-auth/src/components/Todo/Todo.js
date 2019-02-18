import React, { Component } from 'react'
import TodoList from '../TodoList/TodoList'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addTask from '../../redux/actions'
import { Redirect } from 'react-router-dom'

class Todo extends Component {

  state = {
    todo: ''
  }

  onInputChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  addTodoHandle = () => {
    this.props.addTask(this.state.todo)
    // console.log(this.state.todo)
  }

  render() {

    const { auth, authProfile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />

    return (
      <div className="container mt-5">
      <p>Welcome <span style={{fontWeight:100,fontStyle:'italic'}}>{authProfile.firstName} {authProfile.lastName}</span></p>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Todo App</h2><hr />
            <div className="row">
              <div className="col-sm-9">
                <div className="form-group">
                  <input type="text" name="todo" onChange={this.onInputChange} className="form-control" placeholder="Todo..." />
                </div>
              </div>
              <div className="col-sm-3">
                <Button
                  btnType="info"
                  onClick={() => this.props.addTask(this.state.todo)}
                >Add Todo</Button>
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

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth,
    authProfile:state.firebase.profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(addTask, dispatch)
  // return {
  //   addTask: (todo) => dispatch(addTask(todo))
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)