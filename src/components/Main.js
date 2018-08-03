import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


// Containers
import { DefaultLayout } from '../containers';
// Pages
import  Login  from './Login';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

// import { renderRoutes } from 'react-router-config';

class Main extends Component {
  constructor(props){
    super(props)

  }
  render() {

    const login = <Switch><Route exact path="/login" name="Login Page" component={Login} /></Switch>
    const home = <Switch><Route path="/" name="Home" component={DefaultLayout} /></Switch>
    return (
      <HashRouter>
          { this.props.state.loggedIn ? home : login }
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
    return {
      config : state.config,
      state : state
    };
  }

export default connect(mapStateToProps)(Main);
