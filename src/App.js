import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import IntroPage from './containers/IntroPage';
// import LoginPage from './containers/LoginPage';
// import LostFoundPage from './containers/LostFoundPage';
import './App.css';

class App extends Component {
  state = {
    
  }
  
  render(){
    return (
      <>
        <div className="App">
          <IntroPage />
          {/* <LoginPage />
          <LostFoundPage /> */}
        </div>
        <Router>
          <div className="nav">
            <Link className="link" to="/login">Login</Link>
          </div>
          <Switch>
            <Route exact path="/login" component="{LoginPage}" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
