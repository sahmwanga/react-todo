import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '', password: '', firstName: '', lastName: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
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
        <button className="btn btn-primary">Register</button>
      </div>
    )
  }
}

export default SignUp