import React, { Component } from 'react'
import Button from '../Button/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import signIn from '../../redux/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '', password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }

  render() {

    const { error, auth } = this.props
    if (auth.uid) return <Redirect to="/" />

    return (
      <div className="container mt-5">
        <h4 className="pb-3">Sign In</h4>
        <div className="form-group">
          <input type="email" id="email" onChange={this.handleChange} className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" id="password" onChange={this.handleChange} className="form-control" placeholder="***" />
        </div>
        <Button btnType="info" onClick={this.handleSubmit}>Sing In</Button>
        <div className='text-center'>
          {error ? <p className="text-danger">{error}</p> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(signIn, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)