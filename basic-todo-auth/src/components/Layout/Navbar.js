import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import signOut from '../../redux/actions/authActions'
import './Navbar.css'

const NavBar = (props) => {

  const { auth, authProfile } = props

  const links = auth.uid ? (
    <React.Fragment>
      <li className="nav-item">
        <span style={{ cursor: "pointer" }} onClick={props.signOut} className="nav-link">Sign Out</span>
      </li>
      <li className="nav-item">
        <NavLink to="/profile" style={{backgroundColor:'green',borderRadius:300,color:'white'}} className="nav-link">{authProfile.initials}</NavLink>
      </li>
    </React.Fragment>

  ) : (
      <React.Fragment>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
      </React.Fragment>
    )
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          <NavLink to="/">Navbar</NavLink></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end">
            {links}
          </ul>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authProfile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(signOut, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)