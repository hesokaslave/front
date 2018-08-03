import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';
// Pages
import  Login  from './components/Login';
import  Main  from './components/Main';

import { store } from './Store.js'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
      return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
