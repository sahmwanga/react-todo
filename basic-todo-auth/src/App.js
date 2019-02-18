import React, { Component } from 'react';
import Todo from './components/Todo/Todo'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import NavBar from './components/Layout/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/login" component={SignIn} />
            <Route path='/register' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
