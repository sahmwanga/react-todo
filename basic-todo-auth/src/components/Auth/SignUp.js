import React, { Component } from 'react'
import Button from '../Button/Button'
import register from '../../redux/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'

class SignUp extends Component {
  state = {
    email: '', password: '', firstName: '', lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.register(this.state)
  }

  render() {
    const { error, auth } = this.props
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container mt-5">
        <h4 className="pb-3">Sign Up</h4>
        <div className="form-group">
          <input type="email" id="email" onChange={this.handleChange} className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" id="password" onChange={this.handleChange} className="form-control" placeholder="***" />
        </div>
        <div className="form-group">
          <input type="text" id="firstName" onChange={this.handleChange} className="form-control" placeholder="First Name" />
        </div>
        <div className="form-group">
          <input type="text" id="lastName" onChange={this.handleChange} className="form-control" placeholder="Last Name" />
        </div>
        <Button btnType="primary" onClick={this.handleSubmit}>Register</Button>
        <div>
          {error ? <p className="text-center text-danger">{error}</p> : null}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    error: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(register, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)