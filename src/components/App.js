import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
// Connecting the App component
export default connect(mapStateToProps)(App);