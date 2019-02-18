import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signOut } from '../../redux/actions/authActions'
import { NavLink } from 'react-router-dom'

const Links = (props) => {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <button onClick={() => props.signOut} className="nav-link">Log Out</button>
      </li>
    </ul>
  )
}



const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(signOut, dispatch)
}

export default connect(null, mapDispatchToProps)(Links)