import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '', password: ''
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
        <h4 className="pb-3">Sign In</h4>
        <div className="form-group">
          <input type="email" id="email" onChange={this.handleChange} className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" id="password" onChange={this.handleChange} className="form-control" placeholder="***" />
        </div>
        <button className="btn btn-primary">Sing In</button>
      </div>
    )
  }
}

export default SignIn